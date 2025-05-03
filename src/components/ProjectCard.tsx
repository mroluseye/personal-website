import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project?: Project;
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  link?: string;
}

const ProjectCard = ({
  project,
  title: propTitle,
  description: propDescription,
  imageUrl: propImageUrl,
  tags: propTags,
  link: propLink,
}: ProjectCardProps) => {
  // Use project data if provided, otherwise fall back to direct props
  const title = project?.title || propTitle || "Project Title";
  const description =
    project?.description ||
    propDescription ||
    "A short description of the project and the technologies used. This showcases the key features and outcomes.";
  const imageUrl =
    project?.imageUrl ||
    propImageUrl ||
    "https://alphageek.digital/_next/image?url=https%3A%2F%2Fwp.alphageek.digital%2Fwp-content%2Fuploads%2F2024%2F10%2Fcontact-hero-bg.webp&w=3840&q=75";
  const tags = project?.tags || propTags || ["React", "TypeScript", "Tailwind"];
  const link = project?.link || propLink || "https://alphageek.digital/";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-background border border-border flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full flex items-center justify-center gap-2 group"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
