import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import { sanityImageLoader } from "@/lib/image-loader";
import Image from "next/image";

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full aspect-[16/9] my-4 sm:my-6 rounded-xl overflow-hidden">
                <Image
                    loader={sanityImageLoader}
                    src={urlFor(value).url()}
                    alt={value.alt || "Blog image"}
                    fill
                    sizes="(max-width: 1280px) 100vw, 800px"
                    className="object-contain"
                />
            </div>
        ),
        table: ({ value }: any) => (
            <div className="overflow-x-auto my-6 sm:my-8 rounded-xl border border-white/10 bg-[#07162b]/40 backdrop-blur-xl">
                <table className="w-full text-xs sm:text-sm text-left text-slate-200">
                    <tbody className="divide-y divide-white/5">
                        {value.rows.map((row: any, i: number) => (
                            <tr key={row._key} className={i === 0 ? "bg-white/5 font-semibold text-white" : ""}>
                                {row.cells.map((cell: string, j: number) => (
                                    <td key={j} className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-3xl sm:text-4xl font-black mt-12 mb-6 text-slate-100 tracking-tight">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl sm:text-3xl font-black mt-10 mb-5 text-slate-100 tracking-tight">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-slate-100 tracking-tight">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-lg sm:text-xl font-bold mt-6 mb-3 text-slate-100 tracking-tight">{children}</h4>,
        h5: ({ children }: any) => <h5 className="text-base font-medium mt-6 mb-3 text-slate-100 tracking-tight">{children}</h5>,
        h6: ({ children }: any) => <h6 className="text-xs font-medium mt-6 mb-3 text-slate-100 tracking-tight">{children}</h6>,
        normal: ({ children }: any) => <p className="text-slate-300 leading-[1.8]  sm:mb-6 mb-4 text-[17px] sm:text-lg">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#06b6d4] pl-6 italic my-10 text-slate-400 bg-white/5 py-6 rounded-r-xl">
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
