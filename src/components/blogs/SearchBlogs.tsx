"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function SearchBlogs() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        params.set("page", "1"); // Reset to page 1 on new search

        startTransition(() => {
            router.push(`/blog/all?${params.toString()}`);
        });
    }

    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 h-10 bg-white/5 border-none text-slate-200 placeholder:text-slate-500 rounded-xl focus-visible:ring-1 focus-visible:ring-[#06b6d4]/50 transition-all"
                defaultValue={searchParams.get("search")?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {isPending && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
