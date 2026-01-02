"use client";

import { Facebook, Linkedin, Twitter, Instagram, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
    url: string;
    title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: "Twitter",
            icon: <Twitter className="w-4 h-4" />,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10",
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-4 h-4" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "hover:text-[#4267B2] hover:bg-[#4267B2]/10",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-4 h-4" />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
            color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10",
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-4 h-4" />,
            url: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing via query params like others
            color: "hover:text-[#E1306C] hover:bg-[#E1306C]/10",
        }
    ];

    const handleShare = (linkUrl: string) => {
        window.open(linkUrl, "_blank", "width=600,height=400");
    };

    return (
        <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-slate-500 flex items-center">
                <Share2 className="w-4 h-4 mr-2" /> Share:
            </span>
            <div className="flex space-x-2">
                {shareLinks.map((link) => (
                    <Button
                        key={link.name}
                        variant="ghost"
                        size="icon"
                        onClick={() => handleShare(link.url)}
                        className={`w-9 h-9 border border-white/10 text-slate-400 rounded-full transition-all duration-300 ${link.color}`}
                        title={`Share on ${link.name}`}
                    >
                        {link.icon}
                    </Button>
                ))}
            </div>
        </div>
    );
}
