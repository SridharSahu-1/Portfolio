import { useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import GradientSphere from "../../components/GradientSphere";
import TechOrbit from "../../components/TechOrbit";
import SkillCategory from "../../components/SkillCategory";
import ResumeDownloadButton from "../../components/ResumeDownloadButton";
import { techStacks } from "../../constants";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="min-h-screen relative text-white overflow-hidden py-10"
    >
      <GradientSphere
        sphere1Class={"skills-gradient-sphere skills-sphere-1"}
        sphere2Class={"skills-gradient-sphere skills-sphere-2"}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6"
          >
            <Zap size={24} className="text-blue-300" />
            <span className="text-blue-200 font-medium text-2xl">Skills</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my technical expertise across frontend,
            backend, and cloud technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-20 hidden md:block"
        >
          <TechOrbit technologies={techStacks} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16 lg:hidden"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techStacks?.map((stack, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${stack.gradient} ${stack.borderColor} text-white`
                    : "bg-white/5 border-white/20 text-gray-300 hover:border-white/40"
                }`}
              >
                <stack.icon size={20} className="inline mr-2" />
                {stack.category}
              </button>
            ))}
          </div>

          <SkillCategory
            category={techStacks[activeCategory]}
            isActive={true}
          />
        </motion.div>

        {/* Resume Download Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-gradient-to-r from-blue-400/30 to-cyan-400/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Want to see more details?
              </h3>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6">
                Download my resume for a comprehensive overview of my
                experience, projects, and technical skills.
              </p>
              <ResumeDownloadButton />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
