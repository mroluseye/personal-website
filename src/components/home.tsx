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
          So, who's Olu?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 leading-relaxed">Hey There 🙌🏼 </p>
            <p className="text-lg mb-6 leading-relaxed">
              Let’s start with a confession: I’m a bit of a PUBG enthusiast. 
              If you're ever up for a proper team game, you’ll find me as MrPeterCole.
              But beyond the battlefield, I’m a genuinely fun-loving person. 
              Some may occasionally misread that energy, but I’ll take that over being forgettable.</p>
              <p className="text-lg mb-6 leading-relaxed">
              Now, on to the serious stuff. I’m a certified Delivery Management professional at the UK’s Ministry of Justice, 
              with over a decade of experience guiding teams in FinTech, EdTech, AgriTech, Digital Marketing, and Government. 
              I help keep projects on track, moving iteratively, and usually without unnecessary drama.
              Over the years, I’ve worked as a developer, tester, project manager, mentor, and delivery lead. 
              Each role sharpening my ability to translate roadmaps into real-world outcomes.
            </p>
            <p className="text-lg leading-relaxed">
              I’m shamelessly obsessed with Artificial Intelligence, so, after
              hours you’ll find me honing my vibe-coding skills - spinning up
              smart AI agents with a cocktail of Cursur, Tempo, Supabase, and
              Lovable - because continuous learning shouldn’t stop when the
              workday does, I think.🤔
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
              Wanna chat? Bounce an idea by me risk free? Or you've got a
              project giving you headaches and you need some guidance? Just
              reach out. Don't worry, it's free, my reward is in heaven! 😂
            </p>
            <ContactForm className="mt-6" />
          </div>
          <div>
            <p className="text-lg mb-6">Or email me on:</p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:mroluseye@gmail.com"
                className="inline-block border-b-2 border-gray-900 pb-1 text-lg hover:opacity-70 transition-opacity mb-4"
              >
                hello@olucole.com
              </a>
              <p className="text-lg mb-6">Connect with me on:</p>
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
        <p>
          © {new Date().getFullYear()} • Designed & Built with ♥ by Olu Cole
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
