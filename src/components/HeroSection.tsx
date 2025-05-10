import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

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
  const [notesDialogOpen, setNotesDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using the same formspree endpoint as the contact form
      const response = await fetch("https://formspree.io/f/mwpolraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subscription: "OluNotes" }),
      });

      console.log("Form submission response:", response);
      if (response.ok) {
        setSubmitSuccess(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your email. Please try again.");
    } finally {
      setIsSubmitting(false);
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

          {/* Desktop Navigation - Visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
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
            <button
              onClick={() => setNotesDialogOpen(true)}
              className="text-sm hover:text-gray-500 transition-colors"
            >
              OluNotes
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

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 ml-4"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Only appears on mobile */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg absolute w-full mobile-menu-container"
          >
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-gray-500 transition-colors py-2 border-b border-gray-100"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-sm hover:text-gray-500 transition-colors py-2 border-b border-gray-100"
              >
                Work
              </button>
              <button
                onClick={() => {
                  setNotesDialogOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="text-sm hover:text-gray-500 transition-colors py-2 border-b border-gray-100"
              >
                OluNotes
              </button>
              <Button
                variant="default"
                className="bg-peach hover:bg-peach/90 text-white rounded-full px-4 py-1 text-sm w-full"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://adplist.org/mentors/oluseye-cole?session=31631-mentorship-session",
                    "_blank",
                  );
                  setMobileMenuOpen(false);
                }}
              >
                Book A Session
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.8,
              },
            }}
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src="https://scontent-lhr8-1.xx.fbcdn.net/v/t51.75761-15/496710656_18507622450037482_8223471827882490967_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LJhC8RGpxOIQ7kNvwHyvaDv&_nc_oc=AdlauJjN6CvxOQ_pQrozMMqIjvYeKLzaLk8eh0DV1-4QXUg-Sd7TRLM0E11gtsEjzN4&_nc_zt=23&se=-1&_nc_ht=scontent-lhr8-1.xx&_nc_gid=75c7BKoam1BYOBc5781GlQ&oh=00_AfKk1WWcWFD0wxzdOm0ROjE5J4_ngluVGRFa9Fv_lFynuQ&oe=682589D5"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
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
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="rounded-full px-8 py-6 border-gray-300 hover:border-gray-900 transition-colors"
          >
            More About Me
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

      {/* OluNotes Dialog */}
      <Dialog open={notesDialogOpen} onOpenChange={setNotesDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white p-6 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              OluNotes
            </DialogTitle>
            <p className="text-gray-600 text-center">Coming Soon</p>
          </DialogHeader>

          {submitSuccess ? (
            <div className="bg-green-50 p-4 rounded-md text-green-700 mb-4 text-center">
              Thank you! I'll keep you posted on the launch.
            </div>
          ) : (
            <form onSubmit={handleSubmitEmail} className="space-y-4 mt-4">
              <p className="text-sm text-gray-500">
                Be the first to know when OluNotes launches.
              </p>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="bg-white/80"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Keep Me Posted"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
