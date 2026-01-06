"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
    categories: string[];
    isPending: boolean;
    onCategoryChange: (category: string) => void;
}

const VISIBLE_COUNT = 5;

export function CategoryFilter({ categories, isPending, onCategoryChange }: CategoryFilterProps) {
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentCategory = searchParams.get("category") || "All";

    // Create unique list of categories and add "All" 
    const uniqueCategories = ["All", ...categories.filter(c => c !== null).sort()];

    const visibleCategories = uniqueCategories.slice(0, VISIBLE_COUNT);
    const overflowCategories = uniqueCategories.slice(VISIBLE_COUNT);
    const isOverflowActive = overflowCategories.includes(currentCategory);

    // Handle click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-wrap items-center justify-center gap-1.5 py-1">
            {visibleCategories.map((category) => {
                const isActive = currentCategory === category;
                return (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        disabled={isPending}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
                            isActive
                                ? "text-slate-200 border px-2 rounded-full border-white/25 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                : "text-slate-300 border border-white/10 hover:text-white hover:bg-white/5 hover:text-[#06b6d4] hover:border hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 bg-white/5 rounded-full border-white/5"
                        )}
                    >
                        {category}
                    </button>
                );
            })}

            {overflowCategories.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        disabled={isPending}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center",
                            isOverflowActive
                                ? "text-slate-200 border px-2 rounded-full border-white/25 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                : "text-slate-300 border border-white/10 hover:text-white hover:bg-white/5 hover:text-[#06b6d4] hover:border hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 bg-white/5 rounded-full border-white/5"
                        )}
                    >
                        {isOverflowActive ? currentCategory : "More"}
                        <ChevronDown className={cn("ml-1.5 w-3 h-3 transition-transform duration-300", isOpen && "rotate-180")} />
                    </button>

                    {isOpen && (
                        <div className="absolute top-full mt-2 right-0 md:left-1/2 md:-translate-x-1/2 min-w-[160px] p-2 rounded-2xl border border-white/10 bg-[#07162b]/95 backdrop-blur-xl shadow-2xl z-[100] animate-in fade-in zoom-in duration-200">
                            <div className="flex flex-col gap-1">
                                {overflowCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            onCategoryChange(category);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all",
                                            currentCategory === category
                                                ? "text-[#06b6d4] bg-[#06b6d4]/10"
                                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
