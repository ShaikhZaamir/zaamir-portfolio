type Skill = {
    name: string;
    description: string;
    usedIn?: string[];
};

export function formatSkills(
    skillCategories: Record<string, Skill[]>
): string {
    let output = "========================\n";
    output += "SKILLS\n";
    output += "========================\n\n";

    for (const [category, skills] of Object.entries(skillCategories)) {
        output += `${capitalize(category)}\n`;

        for (const skill of skills) {
            output += `• ${skill.name}\n`;
            output += `  Description: ${skill.description}\n`;

            if (skill.usedIn?.length) {
                output += `  Used in: ${skill.usedIn.join(", ")}\n`;
            }

            output += "\n";
        }

        output += "\n";
    }

    return output;
}

export function formatProjects(projects: any[]): string {
    let output = "========================\n";
    output += "PROJECTS\n";
    output += "========================\n\n";

    projects.forEach((project) => {
        output += `Project: ${project.title}\n`;

        if (project.description) {
            output += `Description: ${project.description}\n`;
        }

        if (project.techStack?.length) {
            output += `Technologies: ${project.techStack.join(", ")}\n`;
        }

        if (project.features?.length) {
            output += `Features:\n`;

            project.features.forEach((feature: string) => {
                output += `- ${feature}\n`;
            });
        }

        output += "\n";
    });

    return output;
}

export function formatExperience(experiences: any[]): string {
    let output = "========================\n";
    output += "EXPERIENCE\n";
    output += "========================\n\n";

    experiences.forEach((experience) => {
        output += `${experience.title}\n`;
        output += `${experience.company}\n`;

        if (experience.duration) {
            output += `Duration: ${experience.duration}\n`;
        }

        if (experience.description) {
            output += `${experience.description}\n`;
        }

        output += "\n";
    });

    return output;
}

export function formatTestimonials(testimonials: any[]): string {
    let output = "========================\n";
    output += "TESTIMONIALS\n";
    output += "========================\n\n";

    testimonials.forEach((testimonial) => {
        output += `${testimonial.name}`;

        if (testimonial.role) {
            output += ` (${testimonial.role})`;
        }

        output += "\n";
        output += `"${testimonial.quote}"\n\n`;
    });

    return output;
}

function capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}