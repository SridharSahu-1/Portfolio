import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillProgressProps {
  name: string;
  progress: number;
  color: string;
  delay?: number;
}

const SkillProgress = ({
  name,
  progress,
  color,
  delay = 0,
}: SkillProgressProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [progress, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-200">{name}</span>
        <span className="text-sm text-gray-400">{progress}%</span>
      </div>
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedProgress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-pulse" />
      </div>
    </div>
  );
};

export default SkillProgress;
