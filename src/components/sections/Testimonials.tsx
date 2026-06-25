"use client";

import { testimonials } from "@/lib/testimonials";
import { SiFiverr } from "react-icons/si";
import { US, FR, PH, MT } from "country-flag-icons/react/3x2";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, BadgeCheck } from "lucide-react";

const flags = { US, FR, PH, MT };

const stats = [
    { value: 5, suffix: ".0★", label: "Average rating" },
    { value: 9, suffix: "", label: "Verified reviews" },
    { value: 3, suffix: "+", label: "Repeat orders" },
    { value: 100, suffix: "%", label: "Positive feedback" },
];

/* ── Animated counter ── */
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const c = animate(0, value, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => setDisplay(Math.floor(v)),
        });
        return () => c.stop();
    }, [isInView, value]);

    return <span ref={ref}>{display}{suffix}</span>;
}

/* ── Star row ── */
function Stars() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
        </div>
    );
}

/* ── Fiverr verified badge ── */
function FiverrBadge() {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
            <SiFiverr className="h-3.5 w-3.5" />
            <BadgeCheck className="h-3.5 w-3.5" />
            Verified
        </span>
    );
}

/* ── Section ── */
export default function Testimonials() {
    const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
    const others = testimonials.filter((t) => !t.featured);
    const FeaturedFlag = flags[featured.countryCode as keyof typeof flags];

    const autoplay = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [autoplay.current]
    );

    return (
        <section id="testimonials" className="relative py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* ── Header ── */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Testimonials
                    </p>

                    <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
                        Trusted by clients worldwide
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-400">
                        Feedback from clients and businesses I've collaborated with on web
                        development, custom software, and game development projects.
                    </p>
                </div>

                {/* ── Stats ── */}
                <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 text-center"
                        >
                            <div className="text-3xl font-bold text-white">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="mt-1.5 text-sm text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ── Featured testimonial ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 rounded-2xl border border-primary/20 bg-white/[0.04] p-6 sm:p-8"
                >
                    {/* Top row: stars + Fiverr badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <Stars />
                        <FiverrBadge />
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-5 text-lg leading-8 text-slate-200">
                        "{featured.review}"
                    </blockquote>

                    {/* Author row */}
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <h4 className="font-semibold text-white">{featured.name}</h4>
                            <p className="mt-1 text-sm text-slate-400">{featured.project}</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <span className="flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                                {featured.category}
                            </span>

                            <div className="flex items-center gap-1.5">
                                <FeaturedFlag className="h-3.5 w-5 rounded-sm" />
                                <span className="text-sm text-slate-500">{featured.country}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Other testimonials ── */}
                <div className="mt-6">
                    {/* Mobile Slider */}
                    <div
                        className="overflow-hidden md:hidden"
                        ref={emblaRef}
                    >
                        <div className="flex">
                            {others.map((testimonial, index) => {
                                const Flag =
                                    flags[
                                    testimonial.countryCode as keyof typeof flags
                                    ];

                                return (
                                    <div
                                        key={testimonial.name + index}
                                        className="min-w-0 flex-[0_0_85%] pl-4"
                                    >
                                        <motion.div
                                            whileHover={{ y: -4 }}
                                            className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.04] p-5 transition-colors hover:border-primary/30"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <Stars />
                                                <FiverrBadge />
                                            </div>

                                            <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                                                "{testimonial.review}"
                                            </p>

                                            <div className="mt-5 border-t border-white/8 pt-4">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <h4 className="font-medium text-white">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="mt-0.5 text-sm text-slate-400">
                                                            {testimonial.project}
                                                        </p>
                                                    </div>

                                                    <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
                                                        <Flag className="h-3.5 w-5 rounded-sm" />
                                                        <span className="text-sm text-slate-500">
                                                            {testimonial.country}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mt-3">
                                                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                                        {testimonial.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden gap-4 sm:gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
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
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{ y: -4 }}
                                    className="flex flex-col rounded-2xl border border-white/8 bg-white/[0.04] p-5 transition-colors hover:border-primary/30 sm:p-6"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <Stars />
                                        <FiverrBadge />
                                    </div>

                                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                                        "{testimonial.review}"
                                    </p>

                                    <div className="mt-5 border-t border-white/8 pt-4">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h4 className="font-medium text-white">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="mt-0.5 text-sm text-slate-400">
                                                    {testimonial.project}
                                                </p>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
                                                <Flag className="h-3.5 w-5 rounded-sm" />
                                                <span className="text-sm text-slate-500">
                                                    {testimonial.country}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                                {testimonial.category}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}