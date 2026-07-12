"use client";

import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import Link from "next/link";
import { useState } from "react";
import {
    Mail,
    Loader2,
    MessageCircle,
    ArrowUpRight,
    Briefcase,
    CheckCircle2,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { LINKS } from "@/lib/constants";
import {
    SiGithub,
    SiFiverr,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactLinks = [
    {
        title: "Email",
        description: "Let's start a conversation",
        href: `mailto:${LINKS.EMAIL}`,
        icon: Mail,
    },
    {
        title: "LinkedIn",
        description: "Connect professionally",
        href: LINKS.LINKEDIN,
        icon: FaLinkedin,
    },
    {
        title: "GitHub",
        description: "Explore my code",
        href: LINKS.GITHUB,
        icon: SiGithub,
    },
    {
        title: "WhatsApp",
        description: "Send a quick message",
        href: `https://wa.me/91${LINKS.WHATSAPP}`,
        icon: MessageCircle,
    },
    {
        title: "Fiverr",
        description: "View verified client reviews",
        href: LINKS.FIVERR,
        icon: SiFiverr,
    },
];

const availability = [
    "Contract Work",
    "Collaborations",
    "Freelance Projects",
];

const subjects = [
    "Job Opportunity",
    "Freelance Project",
    "Contract Work",
    "Collaboration",
    "General Inquiry",
];

const SuccessState = () => (
    <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="flex min-h-[400px] flex-col items-center justify-center text-center p-8"
    >
        {/* Animated Icon */}
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
        >
            <CheckCircle2 className="h-10 w-10" />
        </motion.div>

        {/* Heading */}
        <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl font-bold text-foreground"
        >
            Message Delivered
        </motion.h3>

        {/* Message */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 space-y-2"
        >
            <p className="text-muted-foreground">
                Thanks for reaching out! I&apos;ll review your message <br />
                and get back to you shortly.
            </p>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Typical response time: Within 24 hours.
            </p>
        </motion.div>
    </motion.div>
);

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error();
            }

            setSuccess(true);

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch {
            toast.error("Message delivery failed", {
                description:
                    "Please try again in a moment or contact me directly via email.",
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <section
            id="contact"
            className="relative overflow-visible py-16 sm:py-20 lg:py-24"
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl sm:h-[400px] sm:w-[400px]" />
                <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-3xl sm:h-[350px] sm:w-[350px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    {/* Label */}
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Contact
                    </p>

                    {/* Heading */}
                    <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                        Let&apos;s build something <br className="hidden sm:block" /> great together
                    </h2>

                    {/* Meta Details */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Mumbai, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌍</span>
                            <span>Open to remote & international work</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                        Whether you&apos;re looking for a software developer, full-stack expert, or someone
                        to help bring an idea to life, I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-5">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="order-1 self-start rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 md:order-2 md:col-span-3"
                    >
                        <AnimatePresence mode="wait">
                            {success ? (
                                <SuccessState />
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-foreground">Start a conversation</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Have a project, opportunity, or idea in mind? Let's discuss how we can work together.
                                    </p>

                                    <div className="my-6 h-px bg-border" />

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                placeholder="Your Name"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="h-12 bg-background border-border"
                                            />
                                            <Input
                                                type="email"
                                                placeholder="Your Email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="h-12 bg-background border-border"
                                            />
                                        </div>

                                        <div>
                                            <h4 className="mb-3 text-sm font-medium text-foreground">What would you like to discuss?</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {subjects.map((subject) => (
                                                    <button
                                                        key={subject}
                                                        type="button"
                                                        onClick={() => setForm({ ...form, subject })}
                                                        className={`rounded-full border px-4 py-2 text-sm transition-all ${form.subject === subject
                                                            ? "border-primary bg-primary/10 text-primary"
                                                            : "border-border bg-background text-muted-foreground hover:border-primary/50"
                                                            }`}
                                                    >
                                                        {subject}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <Textarea
                                                placeholder="Tell me about your project, opportunity, or idea..."
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                className="min-h-[160px] bg-background border-border"
                                            />
                                            <p className="mt-2 text-xs text-muted-foreground">Typical response time: within 24 hours.</p>
                                        </div>

                                        <Button type="submit" size="lg" disabled={loading} className="w-full">
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send Message →"
                                            )}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Quick Contact + Availability */}
                    <div className="order-2 space-y-6 md:order-1 md:col-span-2">
                        {/* Contact Links */}
                        <div className="space-y-3">
                            {contactLinks.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-accent/50"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="font-medium text-foreground">{item.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                                </div>
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Availability Card */}
                        <div className="rounded-2xl border border-border bg-card p-6">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold text-foreground">Available for</h3>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {availability.map((item) => (
                                    <span
                                        key={item}
                                        className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}