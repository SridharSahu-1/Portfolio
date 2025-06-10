import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { LucideIcon } from "lucide-react";
// import SkillProgress from "./SkillProgress";
import SkillProgress from "./SkillProgress";

interface Skill {
  icon: LucideIcon;
  name: string;
  description: string;
  progress: number;
  color: string;
  gradient: string;
  technologies: string[];
  currentFocus: string;
}

interface LearningCardProps {
  skill: Skill;
  index: number;
  isHovered: boolean;
}

const LearningCard = ({ skill, index, isHovered }: LearningCardProps) => {
  const Icon = skill.icon;

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="orange"
      glarePosition="all"
      glareBorderRadius="24px"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="w-full h-full"
    >
      <div className="relative h-full min-h-[400px] p-6 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-orange-400/60 transition-all duration-500 group overflow-hidden shadow-2xl">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
          <div className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300" />
          <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-500" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={28} className="text-white" />
              </div>
              <div className="text-right">
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {skill.progress}%
                </div>
                <div className="text-xs text-gray-400">Progress</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 mb-2">
              {skill.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <SkillProgress
              name="Current Level"
              progress={skill.progress}
              color={skill.color}
              delay={index * 0.2}
            />
          </div>

          {/* Technologies */}
          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-gray-200 mb-3">
              Key Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-200 border border-white/20 hover:border-orange-400/50 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-auto">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-orange-400/30 transition-colors duration-300">
              <h4 className="text-sm font-semibold text-orange-300 mb-2 flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                Currently Focusing On
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                {skill.currentFocus}
              </p>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Tilt>
  );
};

export default LearningCard;
