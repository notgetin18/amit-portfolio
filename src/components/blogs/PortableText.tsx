import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden border border-white/10">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || "Blog image"}
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl font-bold my-6 text-white">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-bold my-5 text-white">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold my-4 text-white">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold my-3 text-white">{children}</h4>,
        normal: ({ children }: any) => <p className="text-slate-300 leading-relaxed mb-4">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#06b6d4] pl-4 italic my-6 text-slate-400">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 text-slate-300 space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 text-slate-300 space-y-2">{children}</ol>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-[#06b6d4] hover:underline decoration-[#06b6d4]/30"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }: any) => (
            <code className="bg-[#1e293b] px-1.5 py-0.5 rounded text-[#3ed6ac] font-mono text-sm">
                {children}
            </code>
        ),
    },
};

export default function PortableText({ value }: { value: any }) {
    return <PortableTextComponent value={value} components={components} />;
}
