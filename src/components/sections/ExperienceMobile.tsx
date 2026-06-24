"use client";

import { experiences } from "@/lib/experience";
import { CheckCircle2 } from "lucide-react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useRef, useState } from "react";

export default function ExperienceMobile() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(
        scrollYProgress,
        "change",
        (latest) => {
            if (latest < 0.33) {
                setActiveIndex(0);
            } else if (latest < 0.66) {
                setActiveIndex(1);
            } else {
                setActiveIndex(2);
            }
        }
    );

    return (
        <div
            ref={containerRef}
            className="relative mt-16 h-[300vh] lg:hidden"
        >
            <div className="sticky top-24">
                {/* Progress */}
                <div className="mb-5">
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            style={{
                                scaleX: scrollYProgress,
                                transformOrigin: "left",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500"
                        />
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                            Journey
                        </span>

                        <span className="text-xs text-slate-500">
                            {/* {activeIndex + 1} / {experiences.length} */}
                        </span>
                    </div>
                </div>

                {/* Year */}
                <motion.div
                    key={experiences[activeIndex].year}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.25, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 text-center font-heading text-5xl font-bold text-white"
                >
                    {experiences[activeIndex].year}
                </motion.div>

                {/* Deck */}
                <div className="relative h-120">
                    {experiences.map((experience, index) => {
                        const offset = index - activeIndex;

                        return (
                            <motion.div
                                key={experience.title}
                                className="absolute inset-0"
                                animate={{
                                    y:
                                        offset === 0
                                            ? 0
                                            : offset === 1
                                                ? 28
                                                : offset === 2
                                                    ? 56
                                                    : -120,

                                    scale:
                                        offset === 0
                                            ? 1
                                            : offset === 1
                                                ? 0.97
                                                : offset === 2
                                                    ? 0.94
                                                    : 0.9,

                                    opacity:
                                        offset < 0
                                            ? 0
                                            : offset === 0
                                                ? 1
                                                : offset === 1
                                                    ? 0.85
                                                    : 0.7,
                                }}
                                transition={{
                                    duration: 0.55,
                                    ease: "easeOut",
                                }}
                                style={{
                                    zIndex:
                                        experiences.length -
                                        Math.max(index, activeIndex),
                                }}
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-[#0B1023]/95 p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                                    <div
                                        className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${experience.badgeColor === "emerald"
                                            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                            : experience.badgeColor === "cyan"
                                                ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                                                : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                                            }`}
                                    >
                                        {experience.badge}
                                    </div>

                                    <h3 className="text-xl font-bold text-white">
                                        {experience.title}
                                    </h3>

                                    <p className="mt-1 text-slate-400">
                                        {experience.company}
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {experience.duration}
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-slate-300">
                                        {experience.description}
                                    </p>

                                    <div className="mt-5 space-y-2">
                                        {experience.highlights.map(
                                            (highlight) => (
                                                <div
                                                    key={highlight}
                                                    className="flex items-center gap-2"
                                                >
                                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                                    <span className="text-sm text-slate-300">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* <div className="mt-6 flex items-center justify-center gap-2">
                                        {experiences.map(
                                            (_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`h-2 rounded-full transition-all duration-300 ${dotIndex === activeIndex
                                                        ? "w-8 bg-primary"
                                                        : "w-2 bg-white/20"
                                                        }`}
                                                />
                                            )
                                        )}
                                    </div> */}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                {/* Scroll Indicator */}
                <motion.div
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="mt-6 flex flex-col items-center"
                >
                    <span className="text-[10px] uppercase tracking-[0.45em] text-slate-500 mt-10">
                        Scroll
                    </span>

                    <div className="mt-3 h-12 w-px bg-white/10 overflow-hidden">
                        <motion.div
                            animate={{
                                y: [-12, 40],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="h-6 w-full bg-gradient-to-b from-violet-500 to-cyan-500"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}