import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
    title: "John Doe - Video Editor & Designer",
    description: "Professional video editor and designer specializing in creative storytelling through visual content. Explore my portfolio of music videos, commercials, and short films.",
    keywords: ["video editor", "designer", "motion graphics", "video production", "creative director", "John Doe"],
    authors: [{ name: "John Doe" }],
    openGraph: {
        title: "John Doe - Video Editor & Designer",
        description: "Professional video editor and designer specializing in creative storytelling through visual content.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "John Doe - Video Editor & Designer",
        description: "Professional video editor and designer specializing in creative storytelling through visual content.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
