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

export async function rateLimitByEmail(
  email: string
): Promise<{ allowed: boolean; remaining: number }> {
  const key = `rate:contact:${email.toLowerCase().trim()}`;
  const limit = 3; // max 3 emails
  const window = 7200; // 2 hour in seconds

  const current = await redis.get(key);
  const count = current ? Number(current) : 0;

  if (count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  // Increment count and set expiry
  await redis.incr(key);
  await redis.expire(key, window);

  return { allowed: true, remaining: limit - (count + 1) };
}