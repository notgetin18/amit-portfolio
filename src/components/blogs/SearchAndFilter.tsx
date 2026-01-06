"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { SearchBlogs } from "./SearchBlogs";
import { CategoryFilter } from "./CategoryFilter";

interface SearchAndFilterProps {
    categories: string[];
}

export function SearchAndFilter({ categories }: SearchAndFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    function updateParams(newParams: { search?: string; category?: string; page?: string }) {
        const params = new URLSearchParams(searchParams);

        if (newParams.search !== undefined) {
            if (newParams.search) params.set("search", newParams.search);
            else params.delete("search");
        }

        if (newParams.category !== undefined) {
            if (newParams.category === "All") params.delete("category");
            else params.set("category", newParams.category);
        }

        if (newParams.page !== undefined) {
            params.set("page", newParams.page);
        } else {
            params.set("page", "1"); // Reset to page 1 by default on filter change
        }

        startTransition(() => {
            router.push(`/blogs?${params.toString()}`);
        });
    }

    return (
        <div className="max-w-4xl mx-auto p-2 sm:p-3 rounded-3xl bg-[#07162b]/40 border border-white/10 shadow-2xl shadow-black/50">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-1/2">
                    <SearchBlogs
                        isPending={isPending}
                        onSearch={(term) => updateParams({ search: term })}
                    />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <CategoryFilter
                        categories={categories}
                        isPending={isPending}
                        onCategoryChange={(cat) => updateParams({ category: cat })}
                    />
                </div>
            </div>
        </div>
    );
}
