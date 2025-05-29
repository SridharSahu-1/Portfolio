import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import GradientSphere from "../../components/GradientSphere";
import ContactForm from "../../components/ContactForm";
import ContactCard from "../../components/ContactCard";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "Send me an email",
    value: "sridharsahu5555@gmail.com",
    href: "mailto:sridharsahu5555@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    subtitle: "Give me a call",
    value: "+91-8917397964",
    href: "tel:+918917397964",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Let's connect",
    value: "linkedin.com/in/sridharsahu01/",
    href: "https://www.linkedin.com/in/sridharsahu01/",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Github,
    title: "GitHub",
    subtitle: "Check my code",
    value: "github.com/SridharSahu-1",
    href: "https://github.com/SridharSahu-1",
    color: "from-gray-600 to-gray-400",
  },
];

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="min-h-screen relative text-white overflow-hidden py-4"
    >
      <GradientSphere
        sphere1Class={"contact-gradient-sphere contact-sphere-1"}
        sphere2Class={"contact-gradient-sphere contact-sphere-2"}
      />

      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-20 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin"></div>
        <div className="absolute top-3/4 right-16 w-12 h-12 border-2 border-pink-400/30 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-cyan-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6"
          >
            <Send size={20} className="text-purple-300" />
            <span className="text-purple-200 font-medium text-2xl">
              Get In Touch
            </span>
          </motion.div>

          {/* <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Let's Work Together
            </span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">
             Together
            </span>
          </h2> */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Methods */}
          <div className="p-8 order-1 lg:order-2 space-y-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 hover:border-purple-400/60 transition-all duration-500">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=""
            >
              <div className="mb-8">
                {/* <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Reach Out
              </h3> */}
                <p className="text-gray-300 leading-relaxed">
                  Choose your preferred way to connect. I'm always excited to
                  discuss new opportunities and interesting projects.
                </p>
              </div>

              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <ContactCard
                      {...method}
                      isHovered={hoveredCard === index}
                    />
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-center mt-20"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-xl shadow-purple-500/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
