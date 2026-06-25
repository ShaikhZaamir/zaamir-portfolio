export function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",

        "@id": "https://zaamir.vercel.app/#person",

        name: "Zaamir Shaikh",

        givenName: "Zaamir",

        familyName: "Shaikh",

        url: "https://zaamir.vercel.app",

        image: "https://zaamir.vercel.app/og-image.png",

        jobTitle: "Full Stack Developer",

        description:
            "Full Stack Developer specializing in scalable SaaS platforms, business applications, e-commerce systems, and modern web applications using Next.js, React, TypeScript, Node.js, and PostgreSQL.",

        nationality: {
            "@type": "Country",
            name: "India",
        },

        worksFor: {
            "@type": "Organization",
            name: "Freelance",
        },

        alumniOf: [
            {
                "@type": "CollegeOrUniversity",
                name: "M.H. Saboo Siddik College of Engineering",
            },
            {
                "@type": "CollegeOrUniversity",
                name: "Thakur Polytechnic",
            },
        ],

        knowsAbout: [
            "Full Stack Development",
            "Software Engineering",
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "Tailwind CSS",
            "REST APIs",
            "SaaS Development",
            "E-Commerce Development",
            "Web Development",
            "Responsive Design",
            "Cloud Deployment",
        ],

        sameAs: [
            "https://github.com/ShaikhZaamir",
            "https://www.linkedin.com/in/shaikh-zaamir/",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}