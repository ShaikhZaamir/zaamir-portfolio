"use client";

import { useEffect, useState } from "react";
import { Menu, FileText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        const sections = [
            document.getElementById("hero"),
            ...navItems.map((item) => document.getElementById(item.id)),
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const sectionId = entry.target.id;

                    if (sectionId === "hero") {
                        setActiveSection("");
                    } else {
                        setActiveSection(sectionId);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);

            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });

            observer.disconnect();
        };
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-x-0 top-0 z-50"
        >
            <div className="mx-auto max-w-5xl px-6 pb-2 pt-1">
                <div
                    className={`relative flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300 ${scrolled
                        ? "border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
                        : "bg-transparent"
                        }`}
                >
                    {/* Aurora Glow */}
                    {scrolled && (
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/5 via-cyan-500/5 to-emerald-500/5" />
                    )}

                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="relative z-10 font-heading text-sm font-bold tracking-[0.3em] text-white transition-opacity hover:opacity-80"
                    >
                        ZAAMIR
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="relative z-10 hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative text-sm font-medium transition-all duration-200 ${activeSection === item.id
                                    ? "text-white"
                                    : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {item.label}

                                {activeSection === item.id && (
                                    <motion.span
                                        layoutId="active-nav"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                        className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Resume CTA */}
                    <Button
                        onClick={() => window.open(LINKS.RESUME, "_blank")}
                        className="rounded-full px-3 bg-violet-600 hover:bg-violet-500 transition-all duration-200"
                    >
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative z-10 lg:hidden"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="border-white/10 bg-[#050816]"
                        >
                            <div className="mt-12 flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-left text-lg transition-colors ${activeSection === item.id
                                            ? "text-white"
                                            : "text-slate-300 hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}

                                <Button
                                    onClick={() => alert("clicked")}
                                    className="mt-4 rounded-full"
                                >
                                    Resume
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}