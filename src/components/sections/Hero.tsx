"use client";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const industryStartDate = new Date("2026-01-01");
const now = new Date();
const softwareStartDate = new Date("2022-01-01");

const softwareYears = Math.floor(
    (now.getTime() - softwareStartDate.getTime() - 1) /
    (1000 * 60 * 60 * 24 * 365.25)
);

const totalMonths = Math.floor(
    (now.getTime() - industryStartDate.getTime()) /
    (1000 * 60 * 60 * 24 * 30.44)
);

// Use Later After Continuing Job 
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
        value: 0.5,
        suffix: "+",
        unit: "Years",
        label: "Industry Experience",
        decimals: 1,
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
            className="relative overflow-hidden scroll-mt-30 pt-35 pb-16 bg-white"
        >
            {/* Subtle light-themed background blobs tied to primary color */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-4xl text-center px-6">
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-2">
                    <span className="h-px w-3 sm:w-6 bg-primary/40" />
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        Software Developer • Full Stack Developer
                    </p>
                    <span className="h-px w-3 sm:w-6 bg-primary/40" />
                </div>

                {/* Heading */}
                <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
                    Building Modern Software
                    <br />
                    <span className="text-slate-900 bg-clip-text ">
                        For Businesses & Startups
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    I build scalable SaaS platforms, business applications, and digital products that solve real-world problems and deliver measurable value.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button
                        size="lg"
                        className="rounded-full px-6 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                        onClick={() => window.open(LINKS.RESUME, "_blank")}
                    >
                        View Resume
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full px-6 sm:px-8 border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 transition-all"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Let's Connect
                    </Button>
                </div>

                {/* Stats */}
                <div className="mt-20 grid w-full grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-4"
                        >
                            {/* Subtle gradient glow on hover */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative flex items-end justify-center gap-1">
                                <span className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                    <AnimatedNumber value={stat.value} decimals={stat.decimals} />
                                </span>
                                <span className="text-xl font-bold text-slate-900 sm:text-2xl">{stat.suffix}</span>
                                {stat.unit && (
                                    <span className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                                        {stat.unit}
                                    </span>
                                )}
                            </div>

                            {/* Accent underline */}
                            <div className="relative mx-auto mt-2 h-px w-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-300 group-hover:w-12 group-hover:via-primary/60" />

                            <p className="relative mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}