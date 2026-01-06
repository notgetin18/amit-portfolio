"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface SearchBlogsProps {
    isPending: boolean;
    onSearch: (term: string) => void;
}

export function SearchBlogs({ isPending, onSearch }: SearchBlogsProps) {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("search") || "";
    const [query, setQuery] = useState(initialQuery);

    // Update query when searchParams change externally (e.g. browser back button)
    useEffect(() => {
        setQuery(searchParams.get("search") || "");
    }, [searchParams]);

    // Debounce search update
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query !== (searchParams.get("search") || "")) {
                onSearch(query);
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [query, onSearch, searchParams]);

    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 h-10 border border-white/5 bg-white/5 text-slate-200 placeholder:text-slate-500 rounded-xl focus-visible:ring-1 focus-visible:ring-[#06b6d4]/50 transition-all"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {isPending && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                    <div className="w-4 h-4 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
