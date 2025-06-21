import { motion } from "framer-motion";

interface Technology {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  category: {
    category: string;
    icon: any;
    color: string;
    gradient: string;
    borderColor: string;
    technologies: Technology[];
  };
  isActive: boolean;
}

const SkillCategory = ({ category, isActive }: SkillCategoryProps) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div
        className={`p-8 rounded-3xl bg-gradient-to-br ${category.gradient} backdrop-blur-xl border ${category.borderColor} shadow-2xl`}
      >
        <div className="flex items-center mb-8">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-xl mr-4`}
          >
            <category.icon size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {category.category}
            </h3>
            <p className="text-gray-300">Technologies I work with</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:bg-white/15">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-xs text-gray-300">{tech.level}%</span>
                </div>

                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
                  </motion.div>
                </div>

                {/* Proficiency Badge */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white text-xs font-bold">
                      {tech.level >= 80 ? "⭐" : tech.level >= 60 ? "👍" : "📚"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCategory;
