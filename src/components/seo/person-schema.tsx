export function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Zaamir Shaikh",
        url: "https://zaamir.vercel.app",
        image: "https://zaamir.vercel.app/og-image.png",
        jobTitle: "Full Stack Developer",
        description:
            "Full Stack Developer building SaaS platforms, business applications, and digital products using modern web technologies.",

        sameAs: [
            "https://github.com/ShaikhZaamir",
            "https://www.linkedin.com/in/shaikh-zaamir/",
        ],

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
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Full Stack Development",
            "SaaS Development",
            "E-Commerce Development",
            "Web Development",
            "Software Engineering",
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