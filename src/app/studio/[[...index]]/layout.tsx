export const metadata = {
    title: "Sanity Studio",
    description: "Content management for Amit Kumar Portfolio",
};

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body>{children}</body>
        </html>
    );
}
