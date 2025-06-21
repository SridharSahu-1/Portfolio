import { Code, Database, Cloud, TestTube, Zap, Computer } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Now", href: "#now" },
  { name: "Contact", href: "#contact" },
];

const projectsList = [
  {
    projectName: "Quora Clone",
    projectUrl: "https://quora-clone-six.vercel.app",
    githubUrl: "https://github.com/SridharSahu-1/quora-clone",
    projectDescription: [
      "Developed a full-fledged clone of Quora, replicating key features such as asking questions, answering, voting, and image uploads. Added unique features like real-time notifications to enhance user interaction",
      "Utilized React for component rendering, Redux for state management, and Firebase for authentication and data storage. Overcame challenges in optimizing performance for large datasets and ensuring seamless user experience",
      "This project solidified skills in building responsive web applications and integrating frontend frameworks with backend services, demonstrating creativity and technical proficiency",
    ],
    tags: ["HTML", "CSS", "React", "Redux", "Firebase"],
  },
  {
    projectName: "Myntra Clone",
    projectUrl: "https://myntra-project-psi.vercel.app",
    githubUrl: "https://github.com/SridharSahu-1/MyntraProject",
    projectDescription: [
      "Developed a fully functional e-commerce website clone of Myntra using React.js",
      "The site allows users to browse products by various filters, add/remove from cart and view items under different categories, replicating the key features of the original platform",
      "Firebase was integrated to handle the backend operations like user authentication, product and cart data storage",
      "This project helped strengthen skills in frontend frameworks, database integration and building responsive web applications",
    ],
    tags: ["HTML", "CSS", "React", "Firebase"],
  },
];

const experiences = [
  {
    company: "HouseKraft (Part of Modern Spaces)",
    location: "Bangalore, India",
    role: "Frontend Developer",
    period: "January 2025 - Present",
    bullets: [
      "Led the frontend development of a Customer Portal using React and TypeScript, delivering a scalable, high-performance application tailored to modern user expectations.",
      "Developed a Customer Portal integrating machine learning APIs to analyze floor plans, extracting key area details and providing personalized quotations.",
      "Built an Internal ERP System with comprehensive project management features, including task scheduling, budget tracking, and real-time progress monitoring. Optimized workflow efficiency, reducing administrative overhead by 20% and ensuring project milestones were met on schedule.",
      "Conducted regular code reviews and mentored fellow developers, fostering a collaborative environment that increased team productivity by 30%.",
    ],
  },
  {
    company: "Fly Realty (Part of Modern Spaces)",
    location: "Bangalore, India",
    role: "Frontend Developer",
    period: "December 2023 - January 2025",
    bullets: [
      "Created a Lead Management System using React and Redux, automating lead tracking and assignment with robust role-based access control (RBAC). Reduced manual errors by 50% and improved data security.",
      "Architected a CMS that empowered the team to onboard builders and manage project profiles seamlessly. Reduced onboarding time by 40% and improved data consistency.",
      "Integrated a CRM module with real-time construction status updates and payment tracking, leveraging Redux Saga for efficient asynchronous operations. Enhanced client satisfaction and operational transparency, contributing to a 15% increase in on-time project deliveries.",
    ],
  },
];

const links = {
  LinkedIn: "",
  Github: "https://github.com/SridharSahu-1",
  Leetcode: "",
};

// const techStack = [
//   { name: "React", icon: "⚛️", category: "Frontend" },
//   { name: "JavaScript", icon: "🟨", category: "Frontend" },
//   { name: "TypeScript", icon: "🔷", category: "Frontend" },
//   { name: "Tailwind CSS", icon: "🎯", category: "Frontend" },
//   { name: "Three.js", icon: "🎲", category: "Frontend" },
//   { name: "Framer Motion", icon: "🎭", category: "Frontend" },
//   { name: "Java", icon: "☕", category: "Backend" },
//   { name: "Spring Boot", icon: "🍃", category: "Backend" },
//   { name: "Node.js", icon: "🟢", category: "Backend" },
//   { name: "MongoDB", icon: "🍃", category: "Database" },
//   { name: "MySQL", icon: "🐬", category: "Database" },
//   { name: "Git", icon: "📦", category: "Tools" },
//   { name: "Docker", icon: "🐳", category: "Tools" },
//   { name: "AWS", icon: "☁️", category: "Tools" },
//   { name: "Figma", icon: "🎨", category: "Tools" },
// ];

const techStacks = [
  {
    category: "Frontend",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/30",
    technologies: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "React", level: 90 },
      { name: "Redux", level: 78 },
      { name: "Redux Saga", level: 70 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-400/30",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Spring Boot", level: 75 },
      { name: "RESTful APIs", level: 88 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    technologies: [
      { name: "AWS S3", level: 70 },
      { name: "CloudFront", level: 65 },
      { name: "Route 53", level: 60 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 55 },
    ],
  },
  {
    category: "Testing & Tools",
    icon: TestTube,
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-400/30",
    technologies: [
      { name: "Chrome DevTools", level: 85 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    category: "Coding Language",
    icon: Computer,
    color: "from-red-500 to-gray-400",
    gradient: "from-red-500/20 to-black-500/20",
    borderColor: "border-red-400/30",
    technologies: [
      { name: "Java", level: 85 },
      { name: "Python", level: 40 },
    ],
  },
];

export { navItems, projectsList, experiences, links, techStacks };
