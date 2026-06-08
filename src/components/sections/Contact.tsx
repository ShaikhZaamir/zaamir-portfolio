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
    "Full-Time Opportunities",
    "Freelance Projects",
    "Contract Work",
    "Collaborations",
];

const subjects = [
    "Job Opportunity",
    "Freelance Project",
    "Contract Work",
    "Collaboration",
    "General Inquiry",
];

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
            className="relative overflow-visible py-24"
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        CONTACT
                    </p>

                    <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
                        Let's Build Something
                        <br />
                        Great Together
                    </h2>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Mumbai, India</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>🌍</span>
                            <span>Open to Remote Opportunities</span>
                        </div>
                    </div>

                    <p className="mt-6 text-slate-400">
                        Whether you're looking for a Software Developer,
                        Full Stack Developer, or someone to help bring an idea
                        to life, I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Main Layout */}
                <div className="mt-14 grid gap-6 lg:grid-cols-5">
                    {/* Left Side */}
                    <div className="space-y-2 lg:col-span-2">
                        {contactLinks.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-white">
                                                    {item.title}
                                                </h3>

                                                <p className="text-sm text-slate-400">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            );
                        })}

                        {/* Availability */}
                        <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-primary" />

                                <h3 className="font-semibold text-white">
                                    Currently Available For
                                </h3>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {availability.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                                    >
                                        ✓ {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="self-start rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:col-span-3"
                    >
                        <AnimatePresence mode="wait">
                            {success ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 220,
                                            damping: 15,
                                        }}
                                        className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10"
                                    >
                                        <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mt-6 text-3xl font-bold text-white"
                                    >
                                        Message Delivered
                                    </motion.h3>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-5 space-y-4"
                                    >
                                        <p className="text-lg font-medium text-white">
                                            Your message is on its way 🚀
                                        </p>

                                        <p className="max-w-md text-slate-400">
                                            Thanks for taking the time to reach out.
                                            I'll review your message and get back to you shortly.
                                        </p>

                                        <p className="text-sm text-emerald-400">
                                            Typical response time: Within 24 hours.
                                        </p>
                                    </motion.div>


                                </motion.div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-white">
                                        Start a Conversation
                                    </h3>

                                    <p className="mt-2 text-slate-400">
                                        Have a project, opportunity, or idea in mind?
                                        Let's discuss how we can work together.
                                    </p>

                                    <div className="my-4 h-px bg-white/10" />

                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {/* Name + Email */}
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <Input
                                                placeholder="Your Name"
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        name: e.target.value,
                                                    })
                                                }
                                                className="h-12 border-white/10 bg-white/5"
                                            />

                                            <Input
                                                type="email"
                                                placeholder="Your Email"
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className="h-12 border-white/10 bg-white/5"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <h4 className="mb-3 text-sm font-medium text-white">
                                                What would you like to discuss?
                                            </h4>

                                            <div className="flex flex-wrap gap-2">
                                                {subjects.map((subject) => (
                                                    <button
                                                        key={subject}
                                                        type="button"
                                                        onClick={() =>
                                                            setForm({
                                                                ...form,
                                                                subject,
                                                            })
                                                        }
                                                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${form.subject === subject
                                                            ? "border-primary bg-primary/10 text-primary"
                                                            : "border-white/10 bg-white/5 text-slate-400 hover:border-primary/30 hover:text-white"
                                                            }`}
                                                    >
                                                        {subject}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <Textarea
                                                placeholder="Tell me about your project, opportunity, or idea..."
                                                value={form.message}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className="min-h-[180px] resize-none border-white/10 bg-white/5"
                                            />

                                            <p className="mt-2 text-xs text-slate-500">
                                                Typical response time: within 24 hours.
                                            </p>
                                        </div>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={loading}
                                            className="h-12 w-full rounded-xl"
                                        >
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    Sending Message...
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
                </div>
            </div>
        </section >
    );
}