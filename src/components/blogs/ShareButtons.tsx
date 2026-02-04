"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, LinkedinIcon, XIcon, InstagramIcon } from "@/components/ui/social-icons";
import { LazyMotion, domAnimation, m } from "framer-motion";

interface ShareButtonsProps {
    url: string;
    title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: "X",
            icon: <XIcon className="w-5 h-5" />,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/30",
        },
        {
            name: "Facebook",
            icon: <FacebookIcon className="w-5 h-5" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "hover:text-[#0a66ff] hover:bg-[#0a66ff]/30",
        },
        {
            name: "LinkedIn",
            icon: <LinkedinIcon className="w-5 h-5" />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: "hover:text-[#0077b5] hover:bg-[#0077b5]/30",
        },
        {
            name: "Instagram",
            icon: <InstagramIcon className="w-5 h-5" />,
            url: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing via query params like others
            color: "hover:text-[#E1306C] hover:bg-[#E1306C]/10",
        }
    ];
    const handleShare = (linkUrl: string) => {
        window.open(linkUrl, "_blank", "width=600,height=400");
    };

    return (
        <LazyMotion features={domAnimation}>
            <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-slate-300 flex items-center">
                    <Share2 className="w-5 h-5 mr-2" /> Share:
                </span>
                <div className="flex space-x-2">
                    {shareLinks.map((link, index) => (
                        <m.div
                            key={link.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleShare(link.url)}
                                className={`w-10 h-10 border border-white/20 text-slate-200 rounded-full transition-all duration-300 ${link.color}`}
                                title={`Share on ${link.name}`}
                            >
                                {link.icon}
                            </Button>
                        </m.div>
                    ))}
                </div>
            </div>
        </LazyMotion>
    );
}
