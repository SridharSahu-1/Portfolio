import { useRef, useState, useEffect } from "react";
import { Float, Text3D } from "@react-three/drei";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { experiences } from "../../constants";

export default function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current[active]) {
      const firstCardTop = cardRefs.current[0].getBoundingClientRect().top;
      const activeCardTop =
        cardRefs.current[active].getBoundingClientRect().top;
      const offset =
        activeCardTop -
        firstCardTop +
        cardRefs.current[active].offsetHeight / 2;
      setLineHeight(offset);
    }
  }, [active]);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Work Experience
      </h2>

      <div className="lg:flex px-4 justify-center items-center">
        <div className="relative flex-1 px-0 lg:px-80">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-700 z-0" />
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-pink-500 z-10 transition-all duration-500"
            style={{ height: `${lineHeight}px` }}
          />

          <ul className="space-y-20 relative z-20">
            {experiences.map((exp, i) => (
              <motion.li
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.8,
                  delay: i * 0.2,
                }}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full z-20" />
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="lightblue"
                  glarePosition="all"
                  glareBorderRadius="20px"
                   className="w-full max-w-md"
                >
                  <div
                    onClick={() => setActive(i)}
                    className={`card p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 cursor-pointer transition-transform transform hover:scale-105 ${
                      active === i ? "ring-2 ring-pink-500" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-gray-300 block mb-1">
                      {exp.role}
                    </span>
                    <span className="text-xs text-gray-400">{exp.period}</span>
                    {active === i && (
                      <ul className="mt-4 space-y-2 text-gray-200">
                        {exp.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="pl-3 border-l-2 border-pink-500"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Tilt>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Optional: 3D Canvas (currently commented out) */}
        {/* 
        <div className="flex-1 h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Experience3D exp={experiences[active]} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        */}
      </div>
    </section>
  );
}

function AchievementSphere({ position, color, delay }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <motion.mesh
        position={position}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay, duration: 0.6, ease: "backOut" }}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </motion.mesh>
    </Float>
  );
}

function Experience3D({ exp }) {
  return (
    <group>
      <Text3D
        font="/fonts/Inter_Bold.json"
        position={[0, 2, 0]}
        size={0.4}
        height={0.1}
        curveSegments={12}
      >
        {exp.company}
        <meshStandardMaterial
          color={exp.color}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>

      <Text3D
        font="/fonts/Inter_Bold.json"
        position={[0, 1.2, 0]}
        size={0.25}
        height={0.05}
        curveSegments={8}
      >
        {exp.role}
        <meshStandardMaterial color="#e91e63" metalness={0.5} roughness={0.3} />
      </Text3D>

      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.2, 32]} />
        <meshStandardMaterial color="#2d2d44" />
      </mesh>

      {exp.bullets.map((_, i) => {
        const angle = (i / exp.bullets.length) * Math.PI * 2;
        const pos = [Math.cos(angle) * 3, 0.5, Math.sin(angle) * 3];
        return (
          <AchievementSphere
            key={i}
            position={pos}
            color={i % 2 === 0 ? exp.color : "#e91e63"}
            delay={i * 0.2}
          />
        );
      })}
    </group>
  );
}
