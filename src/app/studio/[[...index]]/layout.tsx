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
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
