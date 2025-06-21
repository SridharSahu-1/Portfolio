import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Calendar, Star, Award, Briefcase } from "lucide-react";
import { experiences } from "../../constants";

export default function ExperienceCards() {
  return (
    <section className="min-h-dvh py-4 text-white relative overflow-hidden" id="experience">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-purple-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-3/4 right-10 w-16 h-16 border-2 border-pink-400/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center text-center place-items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6"
          >
            <Briefcase size={24} className="text-purple-300" />
            <span className="text-purple-200 font-medium text-2xl">
              Work Experience
            </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 1.2,
                delay: i * 0.3,
              }}
              className="group"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="pink"
                glarePosition="all"
                glareBorderRadius="32px"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="w-full h-full"
              >
                <div className="relative h-full min-h-[500px] p-8 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-purple-400/60 transition-all duration-500 group overflow-hidden shadow-2xl">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px]" />
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
                    <div className="absolute top-12 right-6 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300" />
                    <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-500" />
                  </div>
                  {/* Company header with icon */}
                  <div className="relative z-10 mb-2">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <Award size={24} className="text-white" />
                        </div>
                        <div className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                          <Calendar
                            size={16}
                            className="mr-2 text-purple-300"
                          />
                          <span className="text-sm font-medium text-purple-200">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <div className="w-2 h-2 lg:w-8 lg:h-8 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                      {exp.company}
                    </h3>
                    <div className="flex items-center space-x-4 ">
                      <Star size={20} className="text-yellow-400" />
                      <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {exp.role}
                      </span>
                    </div>
                  </div>{" "}
                  {/* Experience highlights */}
                  <div className="relative z-10">
                    {exp.bullets.map((bullet, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.3 + idx * 0.15 }}
                        className="group/bullet hover:bg-white/25 p-3 rounded-xl transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="mt-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0 group-hover/bullet:scale-150 group-hover/bullet:shadow-lg group-hover/bullet:shadow-purple-400/50 transition-all duration-300"></div>
                          <p className="text-gray-200 leading-relaxed group-hover/bullet:text-white transition-colors duration-300 text-sm md:text-base">
                            {bullet}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-b-[32px] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Corner glow effects */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-bl-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>{" "}
        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center mt-20"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl shadow-purple-500/50" />
        </motion.div>
      </div>
    </section>
  );
}
