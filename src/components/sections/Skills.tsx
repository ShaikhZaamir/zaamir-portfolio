"use client";

import { skillCategories } from "@/lib/skills";
import {
    animate,
    motion,
    useInView,
    useMotionValue,
    AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "auth", label: "Security" },
    { id: "ai", label: "AI & Python" },
    { id: "cloud", label: "Cloud" },
    { id: "tools", label: "Tools" },
    { id: "concepts", label: "Concepts" },
] as const;

function TechCounter() {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const totalSkills = Object.values(skillCategories)
        .flat()
        .length;

    const count = useMotionValue(0);

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const unsubscribe = count.on("change", (latest) => {
            setDisplay(Math.round(latest));
        });

        return unsubscribe;
    }, [count]);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(count, totalSkills, {
            duration: 1.5,
        });

        return () => controls.stop();
    }, [isInView, count, totalSkills]);

    return (
        <div
            ref={ref}
            className="text-5xl font-bold text-white md:text-7xl"
        >
            {display}+
        </div>
    );
}

export default function Skills() {
    const [activeTab, setActiveTab] =
        useState<keyof typeof skillCategories>("frontend");

    const skills = skillCategories[activeTab];

    return (
        <section
            id="skills"
            className="relative py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        TECH STACK
                    </p>

                    <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
                        Technologies Behind The Products
                    </h2>

                    <p className="mt-4 text-slate-400">
                        A modern technology stack used to design, build, and maintain scalable SaaS platforms, business applications,
                        e-commerce systems, and production software.

                    </p>

                    <div className="mt-10">
                        <TechCounter />

                        <p className="mt-2 text-slate-400">
                            Technologies Across SaaS, E-Commerce &
                            Business Systems
                        </p>

                        <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative overflow-hidden rounded-full border px-5 py-2 text-sm transition-all ${activeTab === tab.id
                                ? "border-primary"
                                : "border-white/10"
                                }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-skill-tab"
                                    className="absolute inset-0 rounded-full bg-primary"
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                    }}
                                />
                            )}

                            <span
                                className={`relative z-10 transition-colors ${activeTab === tab.id
                                    ? "text-white"
                                    : "text-slate-300"
                                    }`}
                            >
                                {tab.label} (
                                {skillCategories[tab.id].length})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="mt-6 grid gap-x-6 gap-y-4 md:grid-cols-2 xl:grid-cols-3"
                    >
                        {skills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -6 }}
                                    className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                                >
                                    <Icon className="h-10 w-10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" />

                                    <h3 className="mt-4 text-xl font-semibold text-white">
                                        {skill.name}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {skill.description}
                                    </p>

                                    <div className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                                        Production Experience
                                    </div>

                                    <div className="mt-5 border-t border-white/10 pt-4">
                                        <p className="text-xs uppercase tracking-wider text-slate-500">
                                            Used In
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {skill.usedIn.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}   