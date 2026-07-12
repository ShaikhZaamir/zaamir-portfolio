"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    AlertTriangle,
    CheckCircle2,
    Cpu,
    ExternalLink,
    Layers,
    Lightbulb,
    Sparkles,
    TrendingUp,
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
    const prefersReducedMotion = useReducedMotion();
    const hasLinks = Boolean(project?.liveUrl || project?.githubUrl);

    // Close on Escape, and stop the page behind the modal from scrolling.
    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    key="projects-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex flex-col bg-background/80 backdrop-blur-md sm:items-center sm:justify-center sm:p-6 lg:p-10"
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="projects-modal-title"
                        initial={
                            prefersReducedMotion
                                ? { opacity: 0 }
                                : { opacity: 0, y: 24, scale: 0.97 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={
                            prefersReducedMotion
                                ? { opacity: 0 }
                                : { opacity: 0, y: 12, scale: 0.98 }
                        }
                        transition={{ duration: prefersReducedMotion ? 0.01 : 0.25, ease: "easeOut" }}
                        onClick={(event) => event.stopPropagation()}
                        className="relative flex h-full w-full flex-col overflow-hidden bg-background sm:h-auto sm:max-h-[85vh] sm:max-w-4xl sm:rounded-3xl sm:border sm:border-border lg:max-w-6xl shadow-xl"
                    >
                        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-5 py-5 sm:px-8 sm:py-6">
                            <div className="min-w-0">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {project.status}
                                </span>

                                <h3
                                    id="projects-modal-title"
                                    className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl"
                                >
                                    {project.name}
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">{project.type}</p>
                            </div>

                            <div className="flex shrink-0 items-center gap-3">
                                {/* On large screens the CTAs live here. Below that, they move to a footer bar. */}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 lg:inline-flex"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80 lg:inline-flex"
                                    >
                                        <SiGithub className="h-4 w-4" />
                                        GitHub
                                    </a>
                                )}

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Close project details"
                                    className="rounded-xl border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 scrollbar-none">
                            <p className="text-base leading-7 text-secondary-foreground sm:text-lg sm:leading-8">
                                {project.summary}
                            </p>

                            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_240px]">
                                {/* Main story column */}
                                <div className="space-y-8">
                                    {/* Challenge + Solution, paired side-by-side once there's room */}
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="rounded-2xl border border-border bg-muted/50 p-5">
                                            <div className="flex items-center gap-2">
                                                <AlertTriangle className="h-4 w-4 text-primary" />
                                                <h4 className="text-base font-semibold text-foreground">
                                                    Challenge
                                                </h4>
                                            </div>
                                            <p className="mt-3 leading-7 text-muted-foreground">
                                                {project.challenge}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-border bg-muted/50 p-5">
                                            <div className="flex items-center gap-2">
                                                <Lightbulb className="h-4 w-4 text-primary" />
                                                <h4 className="text-base font-semibold text-foreground">
                                                    Solution
                                                </h4>
                                            </div>
                                            <p className="mt-3 leading-7 text-muted-foreground">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="h-4 w-4 text-primary" />
                                            <h4 className="text-base font-semibold text-foreground">
                                                Key Features
                                            </h4>
                                        </div>

                                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                                            {project.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                    <span className="text-sm leading-6 text-secondary-foreground">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technical Highlights */}
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <Cpu className="h-4 w-4 text-primary" />
                                            <h4 className="text-base font-semibold text-foreground">
                                                Technical Highlights
                                            </h4>
                                        </div>

                                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                                            {project.technicalHighlights.map((highlight) => (
                                                <div
                                                    key={highlight}
                                                    className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 p-4"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                    <span className="text-sm leading-6 text-secondary-foreground">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="h-4 w-4 text-primary" />
                                            <h4 className="text-base font-semibold text-foreground">
                                                Impact
                                            </h4>
                                        </div>
                                        <p className="mt-3 leading-7 text-secondary-foreground">
                                            {project.impact}
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:sticky lg:top-0 lg:self-start">
                                    <div className="flex items-center gap-2">
                                        <Layers className="h-4 w-4 text-primary" />
                                        <h4 className="text-base font-semibold text-foreground">
                                            Technology Stack
                                        </h4>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-center text-sm text-primary lg:rounded-xl"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {hasLinks && (
                            <div className="grid shrink-0 grid-cols-2 gap-3 border-t border-border px-5 py-4 sm:px-8 lg:hidden">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 ${project.githubUrl ? "" : "col-span-2"
                                            }`}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80 ${project.liveUrl ? "" : "col-span-2"
                                            }`}
                                    >
                                        <SiGithub className="h-4 w-4" />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}