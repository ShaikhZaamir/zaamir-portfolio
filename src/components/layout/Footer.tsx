"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { LINKS } from "@/lib/constants";
import { useRef } from "react";


export default function Footer() {
    const footerRef = useRef(null);
    const isFooterInView = useInView(footerRef, {
        amount: 0.9,
    });

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden border-t border-white/10 bg-[#030512]"
        >
            {/* Aurora Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute right-1/4 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                {/* Main Grid */}
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold tracking-[0.2em] text-transparent">
                            ZAAMIR
                        </h3>

                        <p className="mt-4 max-w-xs leading-7 text-slate-400">
                            Building SaaS Platforms, Business Applications &
                            AI-Powered Systems.
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Available for Opportunities
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Navigation
                        </h4>

                        <ul className="space-y-3">
                            {[
                                ["Experience", "#experience"],
                                ["Projects", "#projects"],
                                ["Tech Stack", "#skills"],
                                ["About", "#about"],
                                ["Contact", "#contact"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="group inline-flex text-slate-400 transition-colors duration-300 hover:text-white"
                                    >
                                        <span className="relative">
                                            {label}
                                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Socials
                        </h4>

                        <ul className="space-y-3">
                            {[
                                {
                                    label: "GitHub",
                                    href: LINKS.GITHUB,
                                },
                                {
                                    label: "LinkedIn",
                                    href: LINKS.LINKEDIN,
                                },
                                {
                                    label: "Email",
                                    href: `mailto:${LINKS.EMAIL}`,
                                },
                                {
                                    label: "Fiverr",
                                    href: LINKS.FIVERR,
                                },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target={
                                            item.href.startsWith("mailto")
                                                ? undefined
                                                : "_blank"
                                        }
                                        rel="noreferrer"
                                        className="group inline-flex items-center gap-1 text-slate-400 transition-all duration-300 hover:text-white"
                                    >
                                        {item.label}

                                        <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                            ↗
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Built With */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="mb-4 text-sm text-slate-500">
                        Built with
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "shadcn/ui",
                            "Framer Motion",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <AnimatePresence>
                        {isFooterInView && (
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                    delay: 1,
                                    duration: 0.3,
                                }}
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                                className="absolute right-0 bottom-5 rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
                            >
                                <ArrowUp className="h-4 w-4 text-slate-300" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Zaamir Shaikh</p>

                    <p>Designed & Built by Zaamir Shaikh</p>

                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                        Portfolio v2.0
                    </span>
                </div>
            </div>
        </footer>
    );
}