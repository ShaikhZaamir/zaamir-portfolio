"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    CheckCircle2,
    ExternalLink,
    X,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

type Project = {
    id: number;
    name: string;
    status: string;
    type: string;

    summary: string;

    description: string;
    challenge: string;
    solution: string;
    impact: string;

    features: string[];
    technicalHighlights: string[];
    tech: string[];

    liveUrl?: string;
    githubUrl?: string;
};

interface ProjectsModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectsModal({
    project,
    onClose,
}: ProjectsModalProps) {
    return (
        <AnimatePresence>
            {project && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 overflow-y-auto p-6"
                    >
                        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-background p-8 backdrop-blur-xl">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                        {project.status}
                                    </span>

                                    <h3 className="mt-4 text-4xl font-bold text-white">
                                        {project.name}
                                    </h3>

                                    <p className="mt-2 text-slate-400">
                                        {project.type}
                                    </p>

                                    <p className="mt-6 text-lg leading-8 text-slate-300">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Live Demo
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                                        >
                                            <SiGithub className="h-4 w-4" />
                                            GitHub
                                        </a>
                                    )}

                                    <button
                                        onClick={onClose}
                                        className="rounded-xl border border-white/10 p-2 transition-colors hover:bg-white/5"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 space-y-8">
                                {/* Challenge */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Challenge
                                    </h4>

                                    <p className="mt-2 leading-7 text-slate-400">
                                        {project.challenge}
                                    </p>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Solution */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Solution
                                    </h4>

                                    <p className="mt-2 leading-7 text-slate-400">
                                        {project.solution}
                                    </p>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Features */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Key Features
                                    </h4>

                                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                                        {project.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                                            >
                                                <CheckCircle2 className="h-4 w-4 text-primary" />

                                                <span className="text-slate-300">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Technical Highlights */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Technical Highlights
                                    </h4>

                                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                                        {project.technicalHighlights.map(
                                            (highlight) => (
                                                <div
                                                    key={highlight}
                                                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                                                >
                                                    <CheckCircle2 className="h-4 w-4 text-primary" />

                                                    <span className="text-slate-300">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Technology Stack
                                    </h4>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Impact */}
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Impact
                                    </h4>

                                    <p className="mt-2 leading-7 text-slate-400">
                                        {project.impact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}