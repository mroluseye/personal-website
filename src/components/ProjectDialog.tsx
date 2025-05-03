import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, X } from "lucide-react";
import ContactForm from "./ContactForm";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  caseStudy?: {
    problem: string;
    solution: string;
    results: string;
  };
}

interface ProjectDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCloseDialog = () => {
    setShowContactForm(false);
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
      <DialogPortal>
        {/* Custom backdrop with blur effect */}
        <DialogOverlay
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          onClick={handleCloseDialog}
          style={{ backdropFilter: "blur(8px)" }}
        />

        <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogClose asChild>
            <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="mr-2 mt-2 font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-foreground">{project.description}</p>

            {project.caseStudy && (
              <div className="mt-8 space-y-6 border-t pt-6">
                <h4 className="text-xl font-semibold">Case Study</h4>

                <div>
                  <h5 className="text-lg font-medium mb-2">Problem</h5>
                  <p className="text-muted-foreground">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-medium mb-2">Solution</h5>
                  <p className="text-muted-foreground">
                    {project.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-medium mb-2">Results</h5>
                  <p className="text-muted-foreground">
                    {project.caseStudy.results}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 group"
                asChild
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>

              <Button
                variant="default"
                className="flex-1 flex items-center justify-center gap-2 group"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                Contact Me
                <Mail className="h-4 w-4 transition-transform group-hover:translate-y-[-2px]" />
              </Button>
            </div>

            {showContactForm && (
              <div className="mt-6 border-t pt-6">
                <h4 className="text-xl font-semibold mb-4">Send a Message</h4>
                <ContactForm
                  onSuccess={() => {
                    setTimeout(() => {
                      setShowContactForm(false);
                    }, 3000);
                  }}
                />
              </div>
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ProjectDialog;
