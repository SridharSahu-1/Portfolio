// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// interface SkillProgressProps {
//   name: string;
//   progress: number;
//   color: string;
//   delay?: number;
// }

// const SkillProgress = ({
//   name,
//   progress,
//   color,
//   delay = 0,
// }: SkillProgressProps) => {
//   const [animatedProgress, setAnimatedProgress] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimatedProgress(progress);
//     }, delay * 1000);

//     return () => clearTimeout(timer);
//   }, [progress, delay]);

//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between items-center">
//         <span className="text-sm font-medium text-gray-200">{name}</span>
//         <span className="text-sm text-gray-400">{progress}%</span>
//       </div>
//       <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
//         <motion.div
//           className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} rounded-full`}
//           initial={{ width: 0 }}
//           animate={{ width: `${animatedProgress}%` }}
//           transition={{ duration: 1.5, ease: "easeOut", delay }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 animate-pulse" />
//       </div>
//     </div>
//   );
// };

// export default SkillProgress;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillProgressProps {
  name: string;
  /** Progress from 0 to 100 (if omitted, defaults to 0) */
  progress?: number;
  /**
   * Optional override for the level label.
   * Should be one of "Beginner" | "Amateur" | "Intermediate" | "Advanced" | "Expert"
   */
  levelOverride?: "Beginner" | "Amateur" | "Intermediate" | "Advanced" | "Expert";
  /** Tailwind gradient classes without `bg-gradient-to-r`, e.g. "from-green-400 to-green-600" */
  color: string;
  /** Delay in seconds before animation starts */
  delay?: number;
}

const LEVEL_LABELS = [
  "Beginner",
  "Amateur",
  "Intermediate",
  "Advanced",
  "Expert",
];

const SkillProgress = ({
  name,
  progress = 0,
  levelOverride,
  color,
  delay = 0,
}: SkillProgressProps) => {
  // Compute levelIndex: if override is provided and valid, use its index;
  // otherwise map progress (0–100) to an index 0–(LEVEL_LABELS.length - 1).
  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);
  let levelIndex: number;
  if (levelOverride) {
    const idx = LEVEL_LABELS.indexOf(levelOverride);
    levelIndex = idx >= 0 ? idx : 0;
  } else {
    // ensure progress is between 0 and 100
    const pct = clamp(progress, 0, 100);
    // Map 0→0, 100→last index. Use Math.round so 50% → middle.
    levelIndex = Math.round((pct / 100) * (LEVEL_LABELS.length - 1));
  }
  const levelLabel = LEVEL_LABELS[levelIndex];

  const [animatedLevelIndex, setAnimatedLevelIndex] = useState(-1);

  useEffect(() => {
    const totalDelay = delay * 1000;
    const timeoutIds: number[] = [];

    const start = () => {
      for (let i = 0; i <= levelIndex; i++) {
        const id = window.setTimeout(() => {
          setAnimatedLevelIndex(i);
        }, i * 200);
        timeoutIds.push(id);
      }
    };
    const startTimeout = window.setTimeout(start, totalDelay);
    timeoutIds.push(startTimeout);

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [levelIndex, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-200">{name}</span>
        <span className="text-sm font-medium text-white">{levelLabel}</span>
      </div>

      <div className="flex gap-1">
        {LEVEL_LABELS.map((_, idx) => {
          const filled = idx <= animatedLevelIndex;
          return (
            <motion.div
              key={idx}
              className={`flex-1 h-2 rounded-full overflow-hidden ${
                filled ? `bg-gradient-to-r ${color}` : "bg-gray-700/50"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: filled ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillProgress;
