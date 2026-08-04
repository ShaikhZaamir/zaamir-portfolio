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
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const handleMobileNavigation = (id: string) => {
        setOpen(false);

        setTimeout(() => {
            scrollToSection(id);
        }, 250);
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
            <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-2 pt-2 lg:pt-4">
                <div
                    className={`relative flex items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-600 ${scrolled
                            ? "border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm"
                            : "bg-transparent"
                        }`}
                >
                    {/* Aurora Glow - Adjusted for light theme */}
                    {scrolled && (
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-emerald-500/5" />
                    )}

                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="relative z-10 font-heading text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] text-slate-900 transition-opacity hover:opacity-70"
                    >
                        ZAAMIR
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="relative z-10 hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative text-sm font-medium transition-all duration-200 py-1 ${activeSection === item.id
                                        ? "text-primary font-semibold"
                                        : "text-slate-500 hover:text-slate-900"
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
                                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary"
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Resume CTA Desktop */}
                    <Button
                        onClick={() => window.open(LINKS.RESUME, "_blank")}
                        className="hidden lg:flex rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all duration-200"
                    >
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative z-10 lg:hidden text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="min-w-full sm:min-w-[300px] px-6 bg-white/95 backdrop-blur-xl border-l border-slate-200 shadow-2xl"
                        >
                            <div className="mt-14 flex flex-col h-full">
                                <div className="mb-6 px-4">
                                    <p className="text-xs font-semibold tracking-[0.3em] text-slate-400">
                                        NAVIGATION
                                    </p>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => handleMobileNavigation(item.id)}
                                            className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === item.id
                                                    ? "bg-indigo-50 text-primary"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => {
                                        setOpen(false);
                                        window.open(LINKS.RESUME, "_blank");
                                    }}
                                    size="lg"
                                    className="mt-8 mx-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all duration-200"
                                >
                                    <FileText className="mr-2 h-4 w-4" />
                                    Resume
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}