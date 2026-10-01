import type { Metadata } from "next";
import "./globals.css";
import { toolConfig } from "@/lib/tool-config";

export const metadata: Metadata = {
  metadataBase: new URL(toolConfig.url),

  title: {
    default: toolConfig.seo.title,
    template: `%s | ${toolConfig.shortName}`,
  },

  description: toolConfig.seo.description,

  keywords: toolConfig.seo.keywords,

  authors: [{ name: toolConfig.name }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: toolConfig.seo.title,
    description: toolConfig.seo.description,
    type: "website",
    url: toolConfig.url,
    siteName: toolConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: toolConfig.seo.title,
    description: toolConfig.seo.description,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}