import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Settings,
  Boxes,
  Target,
  TrendingUp,
  BookOpen,
  Zap,
  BookOpenCheck,
} from "lucide-react";
import GradientSphere from "../../components/GradientSphere";
import LearningCard from "../../components/LearningCard";

const currentSkills = [
  {
    icon: Code,
    name: "Data Structures & Algorithms",
    description:
      "Mastering problem-solving patterns and optimization techniques",
    progress: 75,
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/20 to-red-500/20",
    technologies: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
    currentFocus: "Advanced Graph Algorithms & System Design Problems",
  },
  {
    icon: Database,
    name: "Spring Boot",
    description: "Building robust enterprise-level backend applications",
    progress: 60,
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/20 to-emerald-500/20",
    technologies: ["REST APIs", "JPA", "Security", "Microservices"],
    currentFocus: "Microservices Architecture & Advanced Security",
  },
  {
    icon: Settings,
    name: "System Design",
    description: "Designing scalable and distributed systems",
    progress: 45,
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
    technologies: ["Load Balancing", "Caching", "Databases", "APIs"],
    currentFocus: "High-Level Design & Scalability Patterns",
  },
  {
    icon: Boxes,
    name: "Three.js",
    description: "Creating immersive 3D web experiences",
    progress: 70,
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/20 to-pink-500/20",
    technologies: ["WebGL", "Shaders", "Animations", "Performance"],
    currentFocus: "Advanced Shaders & Interactive 3D Scenes",
  },
];

const learningStats = [
  { label: "Hours This Week", value: "42", icon: BookOpenCheck },
  { label: "Problems Solved", value: "156", icon: TrendingUp },
  { label: "Projects Built", value: "8", icon: BookOpen },
  { label: "Skills Upgraded", value: "4", icon: Zap },
];

const Now = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section
      id="now"
      className="min-h-screen relative text-white overflow-hidden py-20"
    >
      <GradientSphere
        sphere1Class={"now-gradient-sphere now-sphere-1"}
        sphere2Class={"now-gradient-sphere now-sphere-2"}
      />

      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-16 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-orange-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-3/4 right-12 w-16 h-16 border-2 border-green-400/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-blue-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
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
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 border border-orange-400/30 mb-6"
          >
            <TrendingUp size={24} className="text-orange-300" />
            <span className="text-orange-200 font-medium text-2xl">
              Currently Learning
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Constantly evolving and pushing boundaries. Here's what I'm
            currently focused on to stay at the forefront of technology and
            enhance my development skills.
          </motion.p>
        </motion.div>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {learningStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-orange-400/60 transition-all duration-500 text-center group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="relative z-10">
                  <stat.icon
                    size={32}
                    className="mx-auto mb-3 text-orange-400 group-hover:text-orange-300 transition-colors"
                  />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {currentSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group"
            >
              <LearningCard
                skill={skill}
                index={index}
                isHovered={hoveredSkill === index}
              />
            </motion.div>
          ))}
        </div>

        {/* Current Focus Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative p-8 rounded-3xl bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-gradient-to-r from-orange-400/30 to-blue-400/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 flex justify-center items-center gap-2">
              <Target
                height={20}
                width={20}
                color="orange"
                // className="bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400"
              />{" "}
              2025 Learning Goals
            </h3>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Master advanced DSA patterns for competitive programming • Build
              production-ready microservices with Spring Boot • Design scalable
              systems handling millions of users • Create stunning 3D web
              experiences with Three.js
            </p>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full shadow-xl shadow-orange-500/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Now;
