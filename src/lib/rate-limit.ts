import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Separate function to check/add subscription (no expiry for subscriptions)
export async function checkAndAddSubscription(
  email: string
): Promise<{ subscribed: boolean; message?: string }> {
  const normalizedEmail = email.toLowerCase().trim();
  const subKey = `subscribed:emails`; // Set for unique emails

  const isMember = await redis.sismember(subKey, normalizedEmail);

  if (isMember) {
    return { subscribed: true, message: "You already subscribed to the newsletter." };
  }

  // Add to set (no expiry needed for subscriptions)
  await redis.sadd(subKey, normalizedEmail);

  return { subscribed: false };
}

export async function rateLimit(
  email: string,
  ip: string,
  type: "contact" | "subscribe"
): Promise<{ allowed: boolean; error?: string }> {
  const normalizedEmail = email.toLowerCase().trim();
  
  // 1. Email-based limit (3 requests per 2 hours)
  const emailKey = `rate:email:${type}:${normalizedEmail}`;
  const emailLimit = 3;
  const emailWindow = 7200; // 2 hours

  // 2. IP-based limit (5 requests per 1 hour)
  const ipKey = `rate:ip:${type}:${ip}`;
  const ipLimit = 5;
  const ipWindow = 3600; // 1 hour

  // Check both limits in parallel
  const [emailCount, ipCount] = await Promise.all([
    redis.get<number>(emailKey),
    redis.get<number>(ipKey)
  ]);

  // Verify Email Limit first
  if (emailCount && emailCount >= emailLimit) {
    return { 
      allowed: false, 
      error: `Too many requests for this email. Please wait ${emailWindow / 3600} hours.` 
    };
  }

  // Verify IP Limit
  if (ipCount && ipCount >= ipLimit) {
    return { 
      allowed: false, 
      error: "Too many requests from this device. Please try again later." 
    };
  }

  // Increment both counts and set expiries
  const multi = redis.multi();
  multi.incr(emailKey);
  multi.expire(emailKey, emailWindow);
  multi.incr(ipKey);
  multi.expire(ipKey, ipWindow);
  await multi.exec();

  return { allowed: true };
}