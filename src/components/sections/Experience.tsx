"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/experience";

export default function Experience() {
    const [selectedExperience, setSelectedExperience] =
        useState(
            experiences.find((item) => item.current) ??
            experiences[0]
        );

    const activeIndex = experiences.findIndex(
        (exp) => exp.title === selectedExperience.title
    );

    const progress =
        (activeIndex / (experiences.length - 1)) * 100;

    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.4,
    });

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="relative py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Experience
                    </p>

                    <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
                        Career Journey
                    </h2>

                    <p className="mt-4 text-slate-400">
                        From freelance projects to production SaaS platforms, building software solutions used by 
                        businesses and real-world users.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="mt-16 hidden lg:block">
                    <div className="relative">
                        {/* Base Timeline */}
                        <div className="absolute left-1/2 top-6 h-px w-[80%] -translate-x-1/2 bg-white/10" />

                        {/* Animated Progress Line */}
                        <motion.div
                            className="absolute left-1/2 top-6 h-px w-[80%] -translate-x-1/2 origin-left bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500"
                            initial={{ scaleX: 0 }}
                            animate={{
                                scaleX: isInView ? progress / 100 : 0,
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Moving Glow Dot */}
                        <motion.div
                            className="absolute top-[19px] h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(124,58,237,0.8)]"
                            initial={{
                                left: "10%",
                            }}
                            animate={{
                                left: isInView
                                    ? `calc(${10 + progress * 0.8}% - 6px)`
                                    : "10%",
                            }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="grid grid-cols-4 gap-6">
                            {experiences.map((experience) => {
                                const Icon = experience.icon;

                                const isActive =
                                    selectedExperience.title ===
                                    experience.title;

                                const activeClasses =
                                    experience.badgeColor === "emerald"
                                        ? "scale-110 border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                                        : experience.badgeColor === "cyan"
                                            ? "scale-110 border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                            : "scale-110 border-amber-500 bg-amber-500/20 text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)]";

                                return (
                                    <button
                                        key={`${experience.company}-${experience.title}`}
                                        onClick={() =>
                                            setSelectedExperience(experience)
                                        }
                                        className="relative text-center"
                                    >
                                        <p className="mb-4 text-sm text-slate-500">
                                            {experience.year}
                                        </p>

                                        <div
                                            className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${isActive
                                                ? activeClasses
                                                : "border-white/10 bg-white/5 text-slate-300"
                                                }`}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="mt-4 font-medium text-white">
                                            {experience.company}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-400">
                                            {experience.title}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="mt-16 space-y-6 lg:hidden">
                    {experiences.map((experience) => {
                        const Icon = experience.icon;

                        const isActive =
                            selectedExperience.title ===
                            experience.title;

                        return (
                            <button
                                key={`${experience.company}-${experience.title}`}
                                onClick={() =>
                                    setSelectedExperience(experience)
                                }
                                className="flex w-full gap-4 text-left"
                            >
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${isActive
                                        ? experience.badgeColor === "emerald"
                                            ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                                            : experience.badgeColor === "cyan"
                                                ? "border-cyan-500 bg-cyan-500/20 text-cyan-400"
                                                : "border-amber-500 bg-amber-500/20 text-amber-400"
                                        : "border-white/10 bg-white/5 text-slate-300"
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        {experience.year}
                                    </p>

                                    <h3 className="font-medium text-white">
                                        {experience.title}
                                    </h3>

                                    <p className="text-sm text-slate-400">
                                        {experience.company}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Experience Card */}
                <div className="mx-auto mt-16 max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedExperience.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25 }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >
                            <div
                                className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${selectedExperience.badgeColor === "emerald"
                                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                    : selectedExperience.badgeColor === "cyan"
                                        ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                                        : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                                    }`}
                            >
                                {selectedExperience.badge}
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {selectedExperience.title}
                            </h3>

                            <p className="mt-1 text-slate-400">
                                {selectedExperience.company}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                                {selectedExperience.duration}
                            </p>

                            <p className="mt-4 leading-7 text-slate-300">
                                {selectedExperience.description}
                            </p>

                            {/* Highlights */}
                            <div className="mt-6 grid gap-3 md:grid-cols-3">
                                {selectedExperience.highlights.map(
                                    (highlight: string) => (
                                        <div
                                            key={highlight}
                                            className="flex items-center gap-2 w-contain rounded-xl border border-white/10 bg-white/5 p-3"
                                        >
                                            <CheckCircle2 className="h-4 w-4 text-primary" />

                                            <span className="text-sm text-slate-300">
                                                {highlight}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* Tech Stack */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {selectedExperience.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}