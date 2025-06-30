import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export default function ToolTip({
  content,
  children,
  position = "top",
  delay = 0.5,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const getPositionStyles = () => {
    const baseStyles = "absolute z-50 pointer-events-none";

    switch (position) {
      case "top":
        return `${baseStyles} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
      case "bottom":
        return `${baseStyles} top-full left-1/2 transform -translate-x-1/2 mt-2`;
      case "left":
        return `${baseStyles} right-full top-1/2 transform -translate-y-1/2 mr-2`;
      case "right":
        return `${baseStyles} left-full top-1/2 transform -translate-y-1/2 ml-2`;
      default:
        return `${baseStyles} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
    }
  };

  const getArrowStyles = () => {
    switch (position) {
      case "top":
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-gray-800 border-b-transparent";
      case "bottom":
        return "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-gray-800 border-t-transparent";
      case "left":
        return "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-gray-800 border-r-transparent";
      case "right":
        return "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-gray-800 border-l-transparent";
      default:
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-gray-800 border-b-transparent";
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: position === "top" ? 10 : -10,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : -10 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={getPositionStyles()}
          >
            <div className="relative">
              {/* Tooltip Content */}
              <div className="px-3 py-2 text-sm font-medium text-white bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-600/50">
                <div className="relative z-10">{content}</div>
                {/* Gradient overlay for extra beauty */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
              </div>

              {/* Arrow */}
              <div
                className={`absolute w-0 h-0 border-4 ${getArrowStyles()}`}
                style={{
                  filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                }}
              ></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
