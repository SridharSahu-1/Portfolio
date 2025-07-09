import { useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import TechOrbit from "../../components/TechOrbit";
import SkillCategory from "../../components/SkillCategory";
import { techStacks } from "../../constants";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div
      id="skills"
      className="relative text-white overflow-hidden "
    >
      <div className="relative z-10 min-h-full flex flex-col items-center  max-w-7xl mx-auto px-6">
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
          className="hidden md:block"
        >
          <TechOrbit technologies={techStacks} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-4 lg:hidden"
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
      </div>
    </div>
  );
};

export default Skills;
