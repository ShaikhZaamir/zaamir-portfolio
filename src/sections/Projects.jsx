// import React from "react";
// import { motion } from "framer-motion";
// import "./Projects.css";

// const projects = [
//   {
//     title: "Full Stack E-commerce Website",
//     description: "Full-stack eCommerce platform with product catalog, cart, checkout, order management, secure payments, and authentication.",
//     tech: ["Next.js", "Medusa.js", "PostgreSQL", "NextAuth.js", "Razorpay", "Vercel", "Railway"],
//     github: "https://github.com/shaikhzaamir04/pxllar-store",
//     underdev: true,
//   },
//   {
//     title: "Luvana AI Chatbot",
//     description: "Responsive AI chatbot application with intelligent conversational capabilities powered by the OpenAI API.",
//     tech: ["React.js", "Node.js", "OpenAI API", "Tailwind CSS"],
//     github: "https://luvana-ai.vercel.app/",
//   },
//   {
//     title: "Portfolio Website",
//     description: "Responsive React-based portfolio to showcase my skills and projects.",
//     tech: ["React", "Vite", "Framer Motion"],
//     github: "https://zaamir-portfolio.vercel.app/",
//   },
//   {
//     title: "Kyara Homepage",
//     description: "A clean and responsive homepage for Kyara Beverages, built using fundamental web development technologies.",
//     tech: ["HTML", "CSS", "JS"],
//     github: "https://shaikhzaamir04.github.io/kyara-homepage/",
//   },
//   {
//     title: "Unity 3D Game",
//     description: "Immersive 3D adventure game built in Unity with C# scripting.",
//     tech: ["Unity", "C#", "Blender"],
//     github: "https://www.fiverr.com/zaamir_shaikh/help-you-with-unity-projects",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="projects-heading">Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <motion.div
//             className="project-card"
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="project-content">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <div className="tech-tags">
//                 {project.tech.map((tag, i) => (
//                   <span key={i} className="tech-tag">{tag}</span>
//                 ))}
//               </div>
//               <div className="project-links">
//                 <a href={project.github} target="_blank" rel="noreferrer">Project Link</a>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//         {/* Coming Soon Cards */}
//         {[...Array(3)].map((_, index) => (
//           <motion.div
//             className="project-card coming-soon"
//             key={`coming-soon-${index}`}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: 0.3 * (projects.length + index) }}
//             viewport={{ once: true }}
//           >
//             <div className="project-content">
//               <h3>Coming Soon</h3>
//               <p>Exciting project is on its way. Stay tuned!</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Full Stack E-commerce Website",
    description:
      "Full-stack eCommerce platform with product catalog, cart, checkout, order management, secure payments, and authentication.",
    tech: [
      "Next.js",
      "Medusa.js",
      "PostgreSQL",
      "NextAuth.js",
      "Railway",
    ],
    github: "https://github.com/shaikhzaamir04/pxllar-store",
    underdev: true,
  },
  {
    title: "Luvana AI Chatbot",
    description:
      "Responsive AI chatbot application with conversational intelligence, Node.js backend integration, and scalable Vercel deployment.",
    tech: ["React.js", "Node.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    github: "https://luvana-ai.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive React-based portfolio with smooth Framer Motion animations to showcase skills, projects, and technical expertise.",
    tech: ["React", "Vite", "Framer Motion"],
    github: "https://zaamir-portfolio.vercel.app/",
  },
  {
    title: "Kyara Homepage",
    description:
      "A clean and responsive homepage for Kyara Beverages, built using fundamental web development technologies.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://shaikhzaamir04.github.io/kyara-homepage/",
  },
  {
    title: "Unity 3D Game",
    description: "Immersive 3D adventure game developed in Unity with C# scripting and Unity assets for rich visuals and gameplay.",
  tech: ["Unity", "C#", "Blender"],
  github:
  "https://www.fiverr.com/zaamir_shaikh/help-you-with-unity-projects",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.underdev ? (
                  <span className="under-dev">UNDER DEVELOPMENT</span>
                ) : (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Project Link
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Cards */}
        {/* {[...Array(2)].map((_, index) => (
          <motion.div
            className="project-card coming-soon"
            key={`coming-soon-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3 * (projects.length + index),
            }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>Coming Soon</h3>
              <p>Exciting project is on its way. Stay tuned!</p>
            </div>
          </motion.div>
        ))} */}
      </div>
    </section>
  );
};

export default Projects;
