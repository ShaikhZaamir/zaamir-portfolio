import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { PersonSchema } from "@/components/seo/person-schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zaamir.vercel.app"),

  title: {
    default: "Zaamir Shaikh | Full Stack Developer | Next.js, React & Node.js",
    template: "%s | Zaamir Shaikh",
  },

  description:
    "Full Stack Developer specializing in scalable SaaS platforms, business applications, AI-powered solutions, e-commerce systems, and modern web experiences using Next.js, React, TypeScript, Node.js, PostgreSQL, and cloud technologies.",

  keywords: [
    "Zaamir Shaikh",
    "Software Developer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "SaaS Developer",
    "AI Developer",
    "E-Commerce Developer",
    "Portfolio",
    "Mumbai Developer",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Zaamir Shaikh",
      url: "https://zaamir.vercel.app",
    },
  ],

  creator: "Zaamir Shaikh",
  publisher: "Zaamir Shaikh",
  applicationName: "Zaamir Portfolio",
  category: "technology",
  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Zaamir Shaikh | Full Stack Developer",
    description:
      "Building scalable SaaS platforms, business applications, AI-powered solutions, and modern digital products using Next.js, React, TypeScript, and Node.js.",
    url: "https://zaamir.vercel.app",
    siteName: "Zaamir Shaikh Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://zaamir.vercel.app/og-image.png",
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
      "Building scalable SaaS platforms, business applications, AI-powered solutions, and modern digital products.",
    images: ["https://zaamir.vercel.app/og-image.png"],
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
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        spaceGrotesk.variable
      )}
    >
      <body
        className={cn(
          "min-h-screen",
          "flex",
          "flex-col",
          "bg-background",
          "text-foreground",
          "selection:bg-primary",
          "selection:text-primary-foreground"
        )}
      >
        <PersonSchema />
        {children}
        {/* <ZaraChat /> */}
      </body>
    </html>
  );
}