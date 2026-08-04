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

    const totalSkills = Object.values(skillCategories).flat().length;

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
        <div ref={ref} className="text-5xl font-bold text-primary md:text-7xl">
            {display}+
        </div>
    );
}

// Repeats a category's items until there are at least `minCount`, so each
// marquee row is always wider than any realistic viewport before it loops.
// Prevents visible gaps on wide desktop screens for sparse categories.
function getLoopItems<T>(items: T[], minCount = 14): T[] {
    if (items.length === 0) return items;
    const repeated: T[] = [];
    while (repeated.length < minCount) {
        repeated.push(...items);
    }
    return repeated;
}

export default function Skills() {
    const [activeTab, setActiveTab] =
        useState<keyof typeof skillCategories>("frontend");

    const skills = skillCategories[activeTab];

    return (
        <section id="skills" className="relative py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        TECH STACK
                    </p>

                    <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl">
                        Technologies Behind The Products
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        A modern technology stack used to design, build, and maintain
                        scalable SaaS platforms, business applications, e-commerce
                        systems, and production software.
                    </p>

                    <div className="mt-10">
                        {/* <TechCounter /> */}

                        {/* <p className="mt-2 text-muted-foreground">
                            Technologies Across SaaS, E-Commerce &amp; Business Systems
                        </p> */}

                        <div className="mx-auto mt-8 h-px w-50 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </div>
                </div>

                <div className="relative mt-12 -mx-6 sm:mx-0">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:hidden" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:hidden" />

                    <div
                        className="flex gap-2 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative shrink-0 overflow-hidden whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-all ${activeTab === tab.id
                                    ? "border-primary"
                                    : "border-border"
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
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="mt-6 w-full overflow-hidden"
                    >
                        {/* Infinite 3-Row Scrolling Marquee Container */}
                        <div className="relative flex flex-col gap-3 py-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                            {/* Create 3 distinct rows, splitting your skills array across them */}
                            {Array.from({ length: 3 }).map((_, rowIndex) => {
                                // Distribute skills evenly across the 3 rows
                                const rowSkills = skills.filter((_, i) => i % 3 === rowIndex);
                                const baseSkills = rowSkills.length > 0 ? rowSkills : skills;

                                // Repeat sparse rows so they're always wide enough
                                // to loop seamlessly on desktop, not just mobile
                                const displaySkills = getLoopItems(baseSkills, 14);

                                // Alternate scroll direction per row for an organic look
                                const isReverse = rowIndex % 2 === 1;

                                return (
                                    <div
                                        key={rowIndex}
                                        className="flex overflow-hidden group/row select-none"
                                    >
                                        <div className={`flex shrink-0 gap-4 animate-marquee ${isReverse ? "animate-marquee-reverse" : ""} group-hover/row:[animation-play-state:paused]`}>
                                            {/* Render items twice to create a seamless infinite loop effect */}
                                            {[...displaySkills, ...displaySkills].map((skill, skillIdx) => {
                                                const Icon = skill.icon;
                                                return (
                                                    <div
                                                        key={`${skill.name}-${skillIdx}`}
                                                        className="group relative flex items-center gap-3 rounded-2xl px-4 py-3 my-3 shrink-0 bg-card/40 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 shadow-lg shadow-black/5"
                                                    >
                                                        {/* Subtle background glow on hover */}
                                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                                        {/* Icon Wrapper */}
                                                        <div className="relative shrink-0">
                                                            <div className="absolute -inset-1 rounded-xl bg-primary/25 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                            <div className="relative inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-2.5 ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                                                <Icon className="h-4 w-4 text-primary" />
                                                            </div>
                                                        </div>

                                                        {/* Name */}
                                                        <h3 className="text-sm font-semibold tracking-tight text-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-primary">
                                                            {skill.name}
                                                        </h3>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}





// "use client";

// import { skillCategories } from "@/lib/skills";
// import {
//     animate,
//     motion,
//     useInView,
//     useMotionValue,
//     AnimatePresence,
// } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const tabs = [
//     { id: "frontend", label: "Frontend" },
//     { id: "backend", label: "Backend" },
//     { id: "database", label: "Databases" },
//     { id: "auth", label: "Security" },
//     { id: "ai", label: "AI & Python" },
//     { id: "cloud", label: "Cloud" },
//     { id: "tools", label: "Tools" },
//     { id: "concepts", label: "Concepts" },
// ] as const;

// function TechCounter() {
//     const ref = useRef(null);

//     const isInView = useInView(ref, {
//         once: true,
//         margin: "-100px",
//     });

//     const totalSkills = Object.values(skillCategories).flat().length;

//     const count = useMotionValue(0);

//     const [display, setDisplay] = useState(0);

//     useEffect(() => {
//         const unsubscribe = count.on("change", (latest) => {
//             setDisplay(Math.round(latest));
//         });

//         return unsubscribe;
//     }, [count]);

//     useEffect(() => {
//         if (!isInView) return;

//         const controls = animate(count, totalSkills, {
//             duration: 1.5,
//         });

//         return () => controls.stop();
//     }, [isInView, count, totalSkills]);

//     return (
//         <div ref={ref} className="text-5xl font-bold text-primary md:text-7xl">
//             {display}+
//         </div>
//     );
// }

// function getLoopItems<T>(items: T[], minCount = 14): T[] {
//     if (items.length === 0) return items;
//     const repeated: T[] = [];
//     while (repeated.length < minCount) {
//         repeated.push(...items);
//     }
//     return repeated;
// }

// export default function Skills() {
//     const [activeTab, setActiveTab] =
//         useState<keyof typeof skillCategories>("frontend");

//     const skills = skillCategories[activeTab];

//     return (
//         <section id="skills" className="relative py-24 bg-background">
//             <div className="mx-auto max-w-7xl px-6">
//                 {/* Header */}
//                 <div className="mx-auto max-w-3xl text-center">
//                     <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
//                         TECH STACK
//                     </p>

//                     <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-5xl">
//                         Technologies Behind The Products
//                     </h2>

//                     <p className="mt-4 text-muted-foreground">
//                         A modern technology stack used to design, build, and maintain
//                         scalable SaaS platforms, business applications, e-commerce
//                         systems, and production software.
//                     </p>

//                     <div className="mt-10">
//                         {/* <TechCounter /> */}

//                         {/* <p className="mt-2 text-muted-foreground">
//                             Technologies Across SaaS, E-Commerce &amp; Business Systems
//                         </p> */}

//                         <div className="mx-auto mt-8 h-px w-50 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
//                     </div>
//                 </div>

//                 <div className="relative mt-12 -mx-6 sm:mx-0">
//                     <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:hidden" />
//                     <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:hidden" />

//                     <div
//                         className="flex gap-2 overflow-x-auto px-6 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0"
//                     >
//                         {tabs.map((tab) => (
//                             <button
//                                 key={tab.id}
//                                 type="button"
//                                 onClick={() => setActiveTab(tab.id)}
//                                 className={`relative shrink-0 overflow-hidden whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-all ${activeTab === tab.id
//                                     ? "border-primary"
//                                     : "border-border"
//                                     }`}
//                             >
//                                 {activeTab === tab.id && (
//                                     <motion.div
//                                         layoutId="active-skill-tab"
//                                         className="absolute inset-0 rounded-full bg-primary"
//                                         transition={{
//                                             type: "spring",
//                                             stiffness: 350,
//                                             damping: 30,
//                                         }}
//                                     />
//                                 )}

//                                 <span
//                                     className={`relative z-10 transition-colors ${activeTab === tab.id
//                                         ? "text-primary-foreground"
//                                         : "text-muted-foreground"
//                                         }`}
//                                 >
//                                     {tab.label}
//                                 </span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Cards */}
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeTab}
//                         initial={{ opacity: 0, y: 15 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -15 }}
//                         transition={{ duration: 0.25 }}
//                         className="mt-6 w-full overflow-hidden"
//                     >
//                         {/* Infinite 3-Row Scrolling Marquee Container */}
//                         <div className="relative flex flex-col gap-3 py-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
//                             {/* Create 3 distinct rows, splitting your skills array across them */}
//                             {Array.from({ length: 3 }).map((_, rowIndex) => {
//                                 // Distribute skills evenly or duplicate them for a seamless loop
//                                 const rowSkills = skills.filter((_, i) => i % 3 === rowIndex);
//                                 // Fallback if there are fewer items
//                                 const displaySkills = rowSkills.length > 0 ? rowSkills : skills;

//                                 // Alternate scroll direction per row for an organic look
//                                 const isReverse = rowIndex % 2 === 1;

//                                 return (
//                                     <div
//                                         key={rowIndex}
//                                         className="flex overflow-hidden group/row select-none"
//                                     >
//                                         <div className={`flex shrink-0 gap-4 animate-marquee ${isReverse ? "animate-marquee-reverse" : ""} group-hover/row:[animation-play-state:paused]`}>
//                                             {/* Render items twice to create a seamless infinite loop effect */}
//                                             {[...displaySkills, ...displaySkills].map((skill, skillIdx) => {
//                                                 const Icon = skill.icon;
//                                                 return (
//                                                     <div
//                                                         key={`${skill.name}-${skillIdx}`}
//                                                         className="group relative flex items-center gap-3 rounded-2xl px-4 py-3 my-3 shrink-0 bg-card/40 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 shadow-lg shadow-black/5"
//                                                     >
//                                                         {/* Subtle background glow on hover */}
//                                                         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                                                         {/* Icon Wrapper */}
//                                                         <div className="relative shrink-0">
//                                                             <div className="absolute -inset-1 rounded-xl bg-primary/25 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                                                             <div className="relative inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-2.5 ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//                                                                 <Icon className="h-4 w-4 text-primary" />
//                                                             </div>
//                                                         </div>

//                                                         {/* Name */}
//                                                         <h3 className="text-sm font-semibold tracking-tight text-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-primary">
//                                                             {skill.name}
//                                                         </h3>
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </section>
//     );
// }