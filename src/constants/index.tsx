const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
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

export { navItems, projectsList, experiences };
