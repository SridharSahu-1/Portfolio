import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  value: string;
  href: string;
  color: string;
  isHovered: boolean;
}

const ContactCard = ({
  icon: Icon,
  title,
  subtitle,
  value,
  href,
  color,
  isHovered,
}: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-purple-400/60 transition-all duration-500 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
        />

        {/* <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" />
          <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-500 opacity-40" />
        </div> */}

        <div className="relative z-10 flex items-center space-x-4">
          <motion.div
            className={`w-14 h-14 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-100`}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon size={24} className="text-white" />
          </motion.div>

          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-sm text-gray-400 mb-1">{subtitle}</p>
            <p className="text-gray-300 text-sm truncate group-hover:text-white transition-colors duration-300">
              {value}
            </p>
          </div>

          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            animate={{
              x: isHovered ? 4 : 0,
              opacity: isHovered ? 1 : 0.6,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg
              className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Bottom glow effect */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
        />
      </div>
    </motion.a>
  );
};

export default ContactCard;
