import { motion } from "framer-motion";
import { useState } from "react";

interface Technology {
  name: string;
  level: number;
}

interface TechStack {
  category: string;
  icon: unknown;
  color: string;
  technologies: Technology[];
}

interface TechOrbitProps {
  technologies: TechStack[];
}

const TechOrbit = ({ technologies }: TechOrbitProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const allTechs = technologies.flatMap((stack) =>
    stack.technologies.map((tech) => ({
      ...tech,
      category: stack.category,
      color: stack.color,
    }))
  );

  // Create orbital positions
  const createOrbitPositions = (count: number, radius: number) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      positions.push({ x, y, angle });
    }
    return positions;
  };

  const positions = createOrbitPositions(allTechs.length, 200);

  return (
    <div className="relative flex justify-center items-center h-[500px] mb-16">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute z-20 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-white font-bold text-lg"
        >
          Skills
        </motion.div>
      </motion.div>

      {/* Orbital Rings */}
      <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full"></div>
      <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"></div>

      {/* Technology Nodes */}
      {allTechs.map((tech, index) => {
        const position = positions[index];
        const isHovered = hoveredTech === tech.name;

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              bounce: 0.4,
            }}
            animate={{
              x: position.x,
              y: position.y,
              scale: isHovered ? 1.3 : 1,
              rotate:
                hoveredTech === tech.name
                  ? 0
                  : position.angle * (180 / Math.PI),
            }}
            whileHover={{ scale: 1.3, zIndex: 30 }}
            className="absolute z-10 cursor-pointer"
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
          >
            <div
              className={`relative w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white/20`}
            >
              <span className="text-white text-xs font-semibold text-center leading-tight">
                {tech.name}
              </span>

              {/* Hover Details */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg rounded-lg p-3 border border-white/20"
                >
                  <div className="text-white text-sm font-medium">
                    {tech.name}
                  </div>
                  <div className="text-gray-300 text-xs">{tech.category}</div>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
              style={{
                height: "2px",
                width: `${Math.sqrt(
                  position.x * position.x + position.y * position.y
                )}px`,
                transform: `translate(-50%, -50%) rotate(${Math.atan2(
                  position.y,
                  position.x
                )}rad)`,
                transformOrigin: "left center",
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default TechOrbit;
