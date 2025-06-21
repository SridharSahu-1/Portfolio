import { motion } from "framer-motion";
import { Download, FileText, Sparkles } from "lucide-react";
import { useState } from "react";

const ResumeDownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simulate download delay
    setTimeout(() => {
      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Place your resume.pdf in the public folder
      link.download = "Sridhar_Sahu_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className="flex justify-center"
    >
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, rotateZ: 2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative overflow-hidden"
      >
        <div className="relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-purple-500/50">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          {/* Sparkle effects */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Sparkles
              size={16}
              className="absolute top-2 right-2 text-white/60 animate-pulse"
            />
            <Sparkles
              size={12}
              className="absolute bottom-2 left-3 text-white/40 animate-pulse delay-300"
            />
            <Sparkles
              size={14}
              className="absolute top-3 left-1/3 text-white/50 animate-pulse delay-500"
            />
          </div>

          {/* Button content */}
          <div className="relative z-10 flex items-center space-x-3">
            <div className="relative">
              <motion.div
                animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 1,
                  repeat: isDownloading ? Infinity : 0,
                  ease: "linear",
                }}
              >
                {isDownloading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Download
                    size={24}
                    className={`text-white transition-transform duration-300 ${
                      isHovered ? "translate-y-1" : ""
                    }`}
                  />
                )}
              </motion.div>
            </div>

            <div className="flex items-center space-x-2">
              <FileText size={20} className="text-white/80" />
              <span className="text-white font-semibold text-lg">
                {isDownloading ? "Downloading..." : "Download Resume"}
              </span>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-transparent via-white/20 to-transparent transition-all duration-1000 rounded-2xl" />
        </div>

        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </motion.button>
    </motion.div>
  );
};

export default ResumeDownloadButton;
