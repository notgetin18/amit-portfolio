import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

console.log({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

console.log("redis", redis);

export async function rateLimitByEmail(
  email: string
): Promise<{ allowed: boolean; remaining: number }> {
  const key = `rate:contact:${email.toLowerCase().trim()}`;
  const limit = 3; // max 3 emails
  const window = 3600; // 1 hour in seconds

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
