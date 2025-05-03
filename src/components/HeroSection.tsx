import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
}

const HeroSection = ({
  name = "Olu Cole",
  title = "Agilist & AI Enthusiast",
  tagline = "I Enable Teams To Deliver Value Fast and Frequently",
}: HeroSectionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? "bg-white shadow-sm py-4" : "py-6"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium"
          >
            {name.split(" ")[0]}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-8"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-gray-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm hover:text-gray-500 transition-colors"
            >
              Work
            </button>
            <Button
              variant="default"
              className="bg-peach hover:bg-peach/90 text-white rounded-full px-4 py-1 text-sm"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://adplist.org/mentors/oluseye-cole?session=31631-mentorship-session",
                  "_blank",
                );
              }}
            >
              Book A Session
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQEa3kLXxobxkQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673570225604?e=1751500800&v=beta&t=s16nmnlUDu02g2O5zpxqfJOvXetUcBM1dyNBNzA8vAQ"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light mb-6 text-gray-600"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-500 max-w-xl mx-auto mb-12"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={() => scrollToSection("work")}
            variant="outline"
            className="rounded-full px-8 py-6 border-gray-300 hover:border-gray-900 transition-colors"
          >
            Places I've Worked
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} className="text-peach" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
