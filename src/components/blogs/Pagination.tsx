"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
    totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `/blogs?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center space-x-4 mt-12 pb-20">
            <Link href={createPageUrl(currentPage - 1)} className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}>
                <Button variant="outline" className="border-white/10 bg-[#061025]/50 text-white hover:bg-[#06b6d4] hover:text-[#061025]">
                    <ChevronLeft className="w-5 h-5" />
                </Button>
            </Link>

            <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Link key={page} href={createPageUrl(page)}>
                        <Button
                            variant={currentPage === page ? "default" : "outline"}
                            className={
                                currentPage === page
                                    ? "bg-[#06b6d4] text-[#061025] hover:bg-[#06b6d4]/80"
                                    : "border-white/10 bg-[#061025]/50 text-white hover:bg-white/10"
                            }
                        >
                            {page}
                        </Button>
                    </Link>
                ))}
            </div>

            <Link href={createPageUrl(currentPage + 1)} className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}>
                <Button variant="outline" className="border-white/10 bg-[#061025]/50 text-white hover:bg-[#06b6d4] hover:text-[#061025]">
                    <ChevronRight className="w-5 h-5" />
                </Button>
            </Link>
        </div>
    );
}
