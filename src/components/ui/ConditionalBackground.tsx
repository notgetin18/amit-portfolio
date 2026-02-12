"use client";

import { usePathname } from "next/navigation";
import HeroBackground from "./HeroBackground";

export default function ConditionalBackground() {
  const pathname = usePathname();

  // Define routes where HeroBackground should NOT be shown
  // Matches /blogs/[slug] but NOT /blogs (listing page)
  const isExcluded = pathname?.startsWith("/blogs/");

  if (isExcluded) return null;

  return <HeroBackground delay={2500} />;
}
