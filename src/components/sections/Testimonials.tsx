"use client";

import { testimonials } from "@/lib/testimonials";
import { SiFiverr } from "react-icons/si";
import { US, FR, PH, MT } from "country-flag-icons/react/3x2";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    Star,
    BadgeCheck,
} from "lucide-react";

const flags = {
    US,
    FR,
    PH,
    MT,
};


function AnimatedNumber({
    value,
    suffix = "",
}: {
    value: number;
    suffix?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 1.5,
            onUpdate(latest) {
                setDisplayValue(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayValue}
            {suffix}
        </span>
    );
}

export default function Testimonials() {
    const featured =
        testimonials.find((t) => t.featured) ?? testimonials[0];

    const others = testimonials.filter((t) => !t.featured);

    const FeaturedFlag =
        flags[featured.countryCode as keyof typeof flags];

    return (
        <section
            id="testimonials"
            className="relative py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        TESTIMONIALS
                    </p>

                    <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                        Trusted By Clients Worldwide
                    </h2>

                    <p className="mt-6 text-slate-400">
                        Feedback from clients and businesses I've worked with
                        across software development, web applications, and
                        custom software projects.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            value: 5,
                            suffix: ".0★",
                            label: "Average Rating",
                        },
                        {
                            value: 9,
                            suffix: "",
                            label: "Verified Reviews",
                        },
                        {
                            value: 3,
                            suffix: "+",
                            label: "Repeat Orders",
                        },
                        {
                            value: 100,
                            suffix: "%",
                            label: "Positive Feedback",
                        },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
                        >
                            <div className="text-3xl font-bold text-white">
                                <AnimatedNumber
                                    value={stat.value}
                                    suffix={stat.suffix}
                                />
                            </div>

                            <div className="mt-2 text-sm text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-center text-slate-400">
                    Trusted by clients across web development, custom software,
                    e-commerce solutions, and full-stack applications.
                </p>

                {/* Featured Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-16 rounded-3xl border border-primary/20 bg-white/5 p-8 backdrop-blur-xl"
                >
                    <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className="h-4 w-4 fill-primary text-primary"
                            />
                        ))}
                    </div>

                    <blockquote className="text-lg leading-8 text-slate-200">
                        "{featured.review}"
                    </blockquote>

                    <div className="mt-8">
                        <h4 className="font-semibold text-white">
                            {featured.name}
                        </h4>
                        <div className="flex items-center justify-between gap-4">
                            <p className="mt-2 text-sm text-slate-400">
                                {featured.project}
                            </p>

                            <div className="flex items-center gap-2">
                                <FeaturedFlag className="h-3.5 w-5 rounded-sm" />

                                <span className="text-sm text-slate-500">
                                    {featured.country}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                            {featured.category}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-0 text-xs text-emerald-400">
                            <SiFiverr className="h-9 w-9" />
                            <BadgeCheck className="h-4 w-4" />
                        </span>
                    </div>
                </motion.div>

                {/* Other Testimonials */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {others.map((testimonial, index) => {
                        const Flag =
                            flags[
                            testimonial.countryCode as keyof typeof flags
                            ];

                        return (
                            <motion.div
                                key={testimonial.name + index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -6 }}
                                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                            >
                                <div className="mb-4 flex gap-1">
                                    {Array.from({ length: 5 }).map(
                                        (_, star) => (
                                            <Star
                                                key={star}
                                                className="h-4 w-4 fill-primary text-primary"
                                            />
                                        )
                                    )}
                                </div>

                                <p className="text-sm leading-7 text-slate-300">
                                    "{testimonial.review}"
                                </p>

                                <div className="mt-auto">
                                    <div className="mt-6">
                                        <h4 className="font-medium text-white">
                                            {testimonial.name}
                                        </h4>

                                        <div className="flex items-center justify-between gap-4">
                                            <p className="mt-2 text-sm text-slate-400">
                                                {testimonial.project}
                                            </p>

                                            <div className="flex items-center gap-2">
                                                <Flag className="h-3.5 w-5 rounded-sm" />

                                                <span className="text-sm text-slate-500">
                                                    {testimonial.country}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        <span className="flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                            {testimonial.category}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 text-xs text-emerald-400">
                                            <SiFiverr className="h-9 w-9" />
                                            <BadgeCheck className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}