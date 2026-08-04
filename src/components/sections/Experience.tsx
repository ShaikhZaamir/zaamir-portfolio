"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/lib/experience";
import { ChevronDown } from "lucide-react";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const newIndex = Math.min(
            Math.floor(latest * experiences.length),
            experiences.length - 1
        );
        if (newIndex !== activeIndex) setActiveIndex(newIndex);
    });

    const activeExperience = experiences[activeIndex];

    const goToIndex = (i: number) => {
        const target = containerRef.current;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = target.offsetHeight;
        const scrollTo = sectionTop + sectionHeight * (i / experiences.length) + 5;
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            id="experience"
            className="relative"
            style={{ height: `${experiences.length * 100}vh` }}
        >
            {/* Pinned viewport — stays fixed on screen while the section above scrolls past */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
                {/* Header — now lives inside the pinned wrapper, so it never scrolls away */}
                <div className="mx-auto max-w-3xl text-center px-6 shrink-0">
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

                <div className="flex flex-col items-center gap-2 mt-6">
                    <motion.div
                        className="w-px bg-slate-400 origin-bottom"
                        style={{ height: 24 }}
                        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Scroll
                    </span>

                    <motion.div
                        className="w-px bg-slate-400 origin-top"
                        style={{ height: 24 }}
                        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-12 gap-12 mt-16 flex-1 min-h-0">
                    {/* Left: Nav */}
                    <aside className="hidden lg:flex lg:col-span-4 items-center">
                        <nav className="space-y-6 w-full">
                            {experiences.map((exp, i) => (
                                <button
                                    key={exp.title}
                                    onClick={() => goToIndex(i)}
                                    className="flex items-center gap-4 group text-left w-full p-2 -ml-2 rounded-lg transition-colors hover:bg-muted/50"
                                >
                                    <div
                                        className={`h-2 w-2 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-primary scale-125" : "bg-border group-hover:bg-muted-foreground/50"
                                            }`}
                                    />
                                    <div className="flex flex-col">
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeIndex === i ? "text-primary" : "text-muted-foreground"
                                                }`}
                                        >
                                            {exp.year}
                                        </span>
                                        <span
                                            className={`text-sm font-semibold transition-colors ${activeIndex === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                                }`}
                                        >
                                            {exp.company}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Right: Content — only the active card renders, crossfades in place */}
                    <div className="lg:col-span-8 relative flex items-center min-h-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeExperience.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -24 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="space-y-6 w-full overflow-y-auto pr-2"
                            >
                                <div className="space-y-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                        {activeExperience.year}
                                    </span>
                                    <h3 className="text-3xl font-bold tracking-tight">{activeExperience.title}</h3>
                                    <p className="text-xl font-medium text-muted-foreground">{activeExperience.company}</p>
                                </div>

                                <p className="leading-6 text-muted-foreground max-w-2xl">{activeExperience.description}</p>

                                <div className="grid gap-3 md:grid-cols-2">
                                    {activeExperience.highlights.map((h) => (
                                        <div key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {activeExperience.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}




// "use client";

// import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
// import { useRef, useState } from "react";
// import { experiences } from "@/lib/experience";

// export default function Experience() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Track scroll progress of the container
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     // Calculate active index based on scroll position
//     useMotionValueEvent(scrollYProgress, "change", (latest) => {
//         const newIndex = Math.min(
//             Math.floor(latest * experiences.length),
//             experiences.length - 1
//         );
//         if (newIndex !== activeIndex) setActiveIndex(newIndex);
//     });

//     return (
//         <section ref={containerRef} id="experience" className="relative py-24">
//             {/* Header */}
//             <div className="mx-auto max-w-3xl text-center">
//                 <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
//                     Experience
//                 </p>

//                 <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
//                     Career Journey
//                 </h2>

//                 <p className="mt-4 text-slate-400">
//                     From freelance projects to production SaaS platforms, building software solutions used by
//                     businesses and real-world users.
//                 </p>
//             </div>

//             <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 mt-20">
//                 {/* Left: Sticky Navigation */}
//                 <aside className="hidden lg:block lg:col-span-4">
//                     <div className="sticky top-64 space-y-12">
//                         <nav className="space-y-6">
//                             {experiences.map((exp, i) => (
//                                 <button
//                                     key={exp.title}
//                                     onClick={() => document.getElementById(`exp-${i}`)?.scrollIntoView({ behavior: "smooth" })}
//                                     className="flex items-center gap-4 group text-left w-full p-2 -ml-2 rounded-lg transition-colors hover:bg-muted/50"
//                                 >
//                                     {/* Dot Indicator */}
//                                     <div className={`h-2 w-2 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-primary scale-125" : "bg-border group-hover:bg-muted-foreground/50"}`} />

//                                     {/* Year & Company */}
//                                     <div className="flex flex-col">
//                                         <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${activeIndex === i ? "text-primary" : "text-muted-foreground"}`}>
//                                             {exp.year}
//                                         </span>
//                                         <span className={`text-sm font-semibold transition-colors ${activeIndex === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
//                                             {exp.company}
//                                         </span>
//                                     </div>
//                                 </button>
//                             ))}
//                         </nav>
//                     </div>
//                 </aside>

//                 {/* Right: Content */}
//                 <div className="lg:col-span-8 space-y-32">
//                     {experiences.map((exp, i) => (
//                         <motion.section
//                             key={exp.title}
//                             id={`exp-${i}`}
//                             className="space-y-6 relative pl-6 border-l border-border/50"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ margin: "-40% 0px -40% 0px" }}
//                         >
//                             {/* Decorative timeline bullet */}
//                             <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />

//                             <div className="space-y-1">
//                                 <span className="text-xs font-bold uppercase tracking-widest text-primary">{exp.year}</span>
//                                 <h3 className="text-3xl font-bold tracking-tight">{exp.title}</h3>
//                                 <p className="text-xl font-medium text-muted-foreground">{exp.company}</p>
//                             </div>

//                             <p className="leading-8 text-muted-foreground max-w-2xl">{exp.description}</p>

//                             <div className="grid gap-4 md:grid-cols-2">
//                                 {exp.highlights.map((h) => (
//                                     <div key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
//                                         <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
//                                         <span>{h}</span>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="flex flex-wrap gap-2 pt-2">
//                                 {exp.tech.map((t) => (
//                                     <span key={t} className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border">
//                                         {t}
//                                     </span>
//                                 ))}
//                             </div>
//                         </motion.section>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


