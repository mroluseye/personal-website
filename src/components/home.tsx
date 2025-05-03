import React from "react";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const HomePage = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2ef] text-gray-900">
      {/* Hero Section */}
      <HeroSection onNavigate={scrollToSection} />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              I am a certified Delivery Management Expert with experience
              working with teams across FinTech, EdTech, AgriTech, Digital
              Marketing, and Government in varying capacities including software
              development, testing, project management, and most recently, as
              mentor and delivery manager delivering features incrementally and
              iteratively all cutting across a cumulative 10 years' workforce
              period.
            </p>
            <p className="text-lg leading-relaxed">
              I am committed to a culture of continuous learning and relentless
              improvement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Agile Methodologies",
                "Lean Thinking",
                "Facilitation",
                "Automation",
                "Jira",
                "Miro",
                "Stakeholder Mgt",
                "Forecast",
                "Coach",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Work/Projects Section */}
      <motion.section
        id="work"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsGrid />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              Interested in working together? I'm always open to discussing new
              projects, creative ideas or opportunities to be part of your
              vision.
            </p>
            <ContactForm className="mt-6" />
          </div>
          <div>
            <p className="text-lg mb-6">Or connect with me on:</p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:mroluseye@gmail.com"
                className="inline-block border-b-2 border-gray-900 pb-1 text-lg hover:opacity-70 transition-opacity mb-4"
              >
                hello@olucole.com
              </a>
              <a
                href="https://linkedin.com/in/seyecole"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mroluseye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-70 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="https://adplist.org/mentors/oluseye-cole?session=31631-mentorship-session"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-70 transition-opacity"
              >
                ADPList
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-nude text-center text-sm text-peach">
        <p>© {new Date().getFullYear()} • Designed & Built with ♥</p>
      </footer>
    </div>
  );
};

export default HomePage;
