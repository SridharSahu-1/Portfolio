import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import GradientSphere from "../../components/GradientSphere";
import HeroExperience from "../../components/HeroExperience";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const developerRef = useRef<HTMLHeadingElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set([nameRef.current, developerRef.current], {
        y: 100,
        opacity: 0,
        rotationX: -90,
      });

      gsap.set(scrollRef.current, {
        y: 50,
        opacity: 0,
      });

      // Animate greeting first
      tl.to(greetingRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        // Then animate SRIDHAR with 3D effect
        .to(
          nameRef.current,
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.4"
        )
        // Animate DEVELOPER with stagger effect
        .to(
          developerRef.current,
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.7"
        )
        // Finally show scroll indicator
        .to(
          scrollRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );


      // Parallax effect on scroll
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (nameRef.current) {
          gsap.to(nameRef.current, {
            y: rate,
            duration: 0.5,
            ease: "power2.out",
          });
        }

        if (developerRef.current) {
          gsap.to(developerRef.current, {
            y: rate * 0.3,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="h-dvh relative text-white-50 px-5 md:p-0 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <GradientSphere
          sphere1Class={"gradient-sphere sphere-1"}
          sphere2Class={"gradient-sphere sphere-2"}
        />
      </motion.div>

      <div className="h-full w-full flex-center">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20">
            <motion.p
              className="font-medium md:text-2xl text-base"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="inline-block mr-[1ch] origin-bottom-right"
                variants={waveVariants}
                animate="wave"
              >
                👋
              </motion.span>
              Hey, I'm
            </motion.p>
            <div
              ref={nameRef}
              className="font-bold md:text-9xl text-5xl relative"
              style={{ perspective: "1000px" }}
            >
              SRIDHAR
            </div>
          </div>

          <motion.div
            className="absolute w-full z-30 bottom-10 lg:bottom-20 right-0"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="flex justify-between items-end">
              <motion.div
                ref={scrollRef}
                className="flex flex-col items-center md:gap-5 gap-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.p
                  className="md:text-base text-xs"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Scroll
                </motion.p>
                <motion.img
                  className="size-7"
                  src="images/arrowdown.svg"
                  alt="arrowDown"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <div className="flex flex-col items-end">
                <motion.h1
                  ref={developerRef}
                  className="font-bold md:text-9xl text-5xl"
                  style={{ perspective: "1000px" }}
                >
                  {"DEVELOPER".split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.05 +0.3 }}
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(52, 211, 153, 0.8)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="w-full h-full absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <HeroExperience />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
