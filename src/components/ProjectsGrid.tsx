import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects = defaultProjects,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="work" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Places I've Worked
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the amazing organisations I've worked. Contact me if you
            need intros to any of them.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Default projects data for when no props are provided
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Ministry of Justice, UK",
    description:
      "The Ministry of Justice is a major government department, at the heart of the justice system.",
    imageUrl:
      "https://wpcouk.td-cdn.net/content/uploads/2020/09/Ministry_of_Justice_logo_CMYK.png",
    tags: ["Portfolios", "Leadership", "Agile"],
    link: "https://www.gov.uk/government/organisations/ministry-of-justice",
  },
  {
    id: "2",
    title: "The King's Trust",
    description:
      "Non-profit organization website with donation integration, event management, and impact reporting features.",
    imageUrl:
      "https://images.ctfassets.net/qq0roodynp09/5CiE9Z5va1sSGJCrssXUqL/8f0211e1a64e7e99650c1fc1cb9b9612/DSN6027_HomePage_Banner_1440x736.jpg",
    tags: ["Management", "Dynamics"],
    link: "https://www.kingstrust.org.uk/",
  },
  {
    id: "3",
    title: "AlphaGeek Digital",
    description:
      "A modern digital agency website with sleek design and interactive elements showcasing services and portfolio.",
    imageUrl:
      "https://alphageek.digital/_next/image?url=https%3A%2F%2Fwp.alphageek.digital%2Fwp-content%2Fuploads%2F2024%2F10%2Fcontact-hero-bg.webp&w=3840&q=75",
    tags: ["Projects", "Process", "People"],
    link: "https://alphageek.digital/",
  },
  {
    id: "4",
    title: "Portfolio Project",
    description:
      "A personal portfolio website showcasing design and development skills with project examples.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: "5",
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product catalog, shopping cart, and secure checkout.",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "#",
  },
  {
    id: "6",
    title: "Mobile App Design",
    description:
      "UI/UX design for a mobile application focused on user engagement and intuitive navigation.",
    imageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "#",
  },
];

export default ProjectsGrid;
