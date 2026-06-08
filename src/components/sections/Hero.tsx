"use client";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const softwareStartDate = new Date("2022-01-01");
const industryStartDate = new Date("2026-01-01");

const now = new Date();

const softwareYears = Math.floor(
    (now.getTime() - softwareStartDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25)
);

const totalMonths = Math.floor(
    (now.getTime() - industryStartDate.getTime()) /
    (1000 * 60 * 60 * 24 * 30.44)
);

const industryExperience =
    totalMonths < 12
        ? {
            value: totalMonths,
            unit: totalMonths === 1 ? "Month" : "Months",
        }
        : {
            value: Math.floor(totalMonths / 12),
            unit: "Years",
        };

const stats = [
    {
        value: softwareYears,
        suffix: "+",
        unit: "Years",
        label: "Building Software",
        decimals: 0,
    },
    {
        value: Number(industryExperience.value),
        suffix: "+",
        unit: industryExperience.unit,
        label: "Industry Experience",
        decimals: 0,
    },
    {
        value: 10,
        suffix: "+",
        unit: "",
        label: "Projects Delivered",
        decimals: 0,
    },
    {
        value: 5,
        suffix: "+",
        unit: "",
        label: "Production Applications",
        decimals: 0,
    },
];

function AnimatedNumber({
    value,
    decimals = 0,
}: {
    value: number;
    decimals?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 1.5,
            onUpdate(latest) {
                setDisplayValue(latest);
            },
        });

        return () => controls.stop();
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayValue.toFixed(decimals)}
        </span>
    );
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden scroll-mt-30 pt-30 pb-16"
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            <div className="mx-auto">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Eyebrow */}
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Junior Software Developer @QuickSO
                    </p>

                    {/* Heading */}
                    <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                        Full-Stack Developer Building Scalable
                        <br />
                        SaaS Platforms, Business Systems &
                        <br />
                        Modern Web Applications
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400">
                        I&apos;m a Software Developer specializing in full-stack
                        development with experience building production-ready SaaS
                        platforms, business applications, e-commerce solutions,
                        and AI-powered systems using React, Next.js, TypeScript,
                        Node.js, PostgreSQL, and Python.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button
                            size="lg"
                            className="rounded-full px-6"
                            onClick={() =>
                                window.open(LINKS.RESUME, "_blank")
                            }
                        >
                            View Resume
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                            }
                        >
                            Let&apos;s Connect
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 w-full grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className=" rounded-2xl  border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl "
                            >
                                <div className="flex items-end justify-center gap-1">
                                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                                        <AnimatedNumber
                                            value={stat.value}
                                            decimals={stat.decimals}
                                        />
                                    </span>

                                    <span className="text-4xl font-bold text-primary">
                                        {stat.suffix}
                                    </span>

                                    {stat.unit && (
                                        <span className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-primary/70">
                                            {stat.unit}
                                        </span>
                                    )}
                                </div>

                                <p className="mt-2 text-sm text-slate-300">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}