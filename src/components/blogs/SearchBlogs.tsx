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
        <div className="relative max-w-xl mx-auto mb-8 sm:mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
                type="text"
                placeholder="Search articles by keyword or category..."
                defaultValue={searchParams.get("search")?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 py-6 bg-[#061025]/50 border-white/10 text-white placeholder:text-slate-500 rounded-full focus:ring-[#06b6d4] transition-all"
            />
            {isPending && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
