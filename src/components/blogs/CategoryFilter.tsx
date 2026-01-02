"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
    categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const currentCategory = searchParams.get("category") || "All";

    // Create unique list of categories and add "All" and "Others"
    const STATIC_CATEGORIES = ["Development", "React", "Backend", "UI/UX", "Tutorial"];
    const uniqueCategories = ["All", ...STATIC_CATEGORIES, "Others"];

    function handleCategoryClick(category: string) {
        const params = new URLSearchParams(searchParams);
        if (category === "All") {
            params.delete("category");
        } else {
            params.set("category", category);
        }
        params.set("page", "1"); // Reset to page 1

        startTransition(() => {
            router.push(`/blog/all?${params.toString()}`);
        });
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-1.5 py-1">
            {uniqueCategories.map((category) => {
                const isActive = currentCategory === category;
                return (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        disabled={isPending}
                        className={cn(
                            "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300",
                            isActive
                                ? "bg-[#06b6d4] text-[#020617] shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {category}
                    </button>
                );
            })}
            {isPending && (
                <div className="flex items-center ml-2">
                    <div className="w-3 h-3 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
