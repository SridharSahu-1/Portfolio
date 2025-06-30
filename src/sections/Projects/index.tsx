import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiRedux, SiFirebase, SiHtml5, SiCss3 } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projectsList } from "../../constants";
import Macbook from "../../components/Macbook";
import ToolTip from "../../components/Tooltip";

const iconMap = {
  React: <FaReact size={20} />,
  Redux: <SiRedux size={20} />,
  Firebase: <SiFirebase size={20} />,
  HTML: <SiHtml5 size={20} />,
  CSS: <SiCss3 size={20} />,
  Github: <FaGithub size={20} />,
  ExternalLink: <HiOutlineExternalLink size={20} />,
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = projectsList.length;
  const project = projectsList[currentIndex];

  const handleProjectChange = (newIndex: number) => {
    if (newIndex === currentIndex || isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(newIndex);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + total) % total;
    handleProjectChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % total;
    handleProjectChange(newIndex);
  };

  return (
    <section
      id="projects"
      className="min-h-dvh py-5 border-b border-white/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl animate-bounce" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-full px-6 pt-10">
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30"
          >
            <Briefcase size={24} className="text-purple-300" />
            <span className="text-purple-200 font-medium text-2xl">
              Projects
            </span>
          </motion.div>
        </div>

        <div className="grid h-[85vh] grid-cols-1 lg:grid-cols-[2fr_3fr] gap-2">
          <div className="h-full p-8 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl flex flex-col justify-between transition-all duration-500 hover:border-purple-400/60 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.h2
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {project.projectName}
                  </motion.h2>
                </div>
                <ul className="space-y-4">
                  {project.projectDescription.map((line, idx) => (
                    <motion.li
                      key={`${currentIndex}-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                      className="flex items-start p-3 rounded-xl hover:bg-white/25 transition-all duration-300"
                    >
                      <div className="mt-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 animate-pulse" />
                      <p className="ml-3 text-gray-200 leading-relaxed text-sm md:text-base">
                        {line}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Tech & Links */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tech-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-6"
              >
                <div className="flex items-center gap-2 mb-4 text-indigo-200">
                  <span className="text-white">Tech Stacks:</span>
                  <div className="flex flex-wrap gap-4">
                    {project.tags.map((tag, idx) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.3 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        <ToolTip content={tag} position="top" delay={0.3}>
                          <div className="w-full h-full flex items-center justify-center rounded-full transition-colors duration-200">
                            {iconMap[tag] || (
                              <span className="text-indigo-200 text-sm">
                                {tag}
                              </span>
                            )}
                          </div>
                        </ToolTip>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="flex items-center gap-4 text-indigo-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <span>Links: </span>
                  <Tooltip
                    content="View Source Code"
                    position="right"
                    delay={0.3}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:scale-110 transition-all duration-300"
                    >
                      {iconMap.Github}
                    </a>
                  </Tooltip>
                  <Tooltip
                    content="View Live Project"
                    position="right"
                    delay={0.3}
                  >
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:scale-110 transition-all duration-300"
                    >
                      {iconMap.ExternalLink}
                    </a>
                  </Tooltip>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Macbook Preview */}
          <div className="flex flex-col justify-center items-center h-dvh md:h-full overflow-auto pt-20 pb-5">
            <Macbook projectUrl={project.projectUrl} />
            <motion.span
              className="mt-2 text-gray-400"
              key={`hint-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              You can use the laptop to view my project
            </motion.span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <Tooltip content="Previous Project" position="top" delay={0.2}>
            <motion.button
              onClick={handlePrev}
              disabled={isTransitioning}
              aria-label="Previous project"
              className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200 disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="images/arrowLeft.svg" alt="Previous" />
            </motion.button>
          </Tooltip>

          <motion.span
            className="text-sm text-gray-400"
            key={`counter-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentIndex + 1}/{total}
          </motion.span>

          <Tooltip content="Next Project" position="top" delay={0.2}>
            <motion.button
              onClick={handleNext}
              disabled={isTransitioning}
              aria-label="Next project"
              className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200 disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="images/arrowRight.svg" alt="Next" />
            </motion.button>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
