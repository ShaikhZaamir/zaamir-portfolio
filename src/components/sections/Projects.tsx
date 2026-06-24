"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { projects } from "@/lib/projects";
import { LINKS } from "@/lib/constants";
import ProjectsModal from "@/components/layout/ProjectsModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[0] | null
    >(null);

    return (
        <section
            id="projects"
            className="relative py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        PROJECTS
                    </p>

                    <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mt-4 text-slate-400">
                        A showcase of production-ready SaaS platforms, business applications, and software systems designed to
                        solve real-world challenges and support business operations.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <motion.button
                            key={project.id}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group rounded-3xl border border-white/10 bg-white/5 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.07] hover:shadow-[0_0_50px_rgba(124,58,237,0.15)]"
                        >
                            <div className="p-6">
                                <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    {project.status}
                                </span>

                                <h3 className="mt-4 text-xl lg:text-2xl font-bold text-white">
                                    {project.name}
                                </h3>

                                <p className="mt-2 text-sm text-slate-400">
                                    {project.type}
                                </p>

                                <p className="mt-4 line-clamp-3 leading-7 text-slate-300">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tech
                                        .slice(0, 4)
                                        .map((tech) => (
                                            <span
                                                key={tech}
                                                className="
                                                    rounded-full
                                                    border
                                                    border-white/10
                                                    bg-white/5
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    text-slate-300
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-primary">
                                    <span className="font-medium">
                                        View Details
                                    </span>

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="mt-10 text-center">
                    <a
                        href={LINKS.GITHUB}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-white/10"
                    >
                        <span className="font-medium text-white">
                            Explore More Projects on GitHub
                        </span>

                        <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            <ProjectsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}