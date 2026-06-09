import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PersonSchema } from "@/components/seo/person-schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaamir.vercel.app"),

  title: {
    default: "Zaamir Shaikh | Full Stack Developer | Next.js, React & Node.js",
    template: "%s | Zaamir Shaikh",
  },

  description:
    "Full Stack Developer building SaaS platforms, business applications, and digital products using Next.js, React, TypeScript, Node.js, PostgreSQL, and modern web technologies.",

  keywords: [
    "Zaamir Shaikh",
    "Software Developer",
    "Full Stack Developer",
    "Junior Software Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "SaaS Developer",
    "E-Commerce Developer",
    "Portfolio",
    "Mumbai Developer",
  ],

  authors: [
    {
      name: "Zaamir Shaikh",
    },
  ],

  creator: "Zaamir Shaikh",

  publisher: "Zaamir Shaikh",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Zaamir Shaikh | Full Stack Developer",
    description:
      "Building SaaS Platforms, Business Applications, and Digital Products with modern web technologies.",
    url: "https://zaamir.vercel.app",
    siteName: "Zaamir Shaikh Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zaamir Shaikh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaamir Shaikh | Full Stack Developer",
    description:
      "Building SaaS Platforms, Business Applications, and Digital Products with modern web technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        spaceGrotesk.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <PersonSchema />
        {children}
      </body>
    </html>
  );
}