import { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5 bg-transparent backdrop-blur-md border-b border-b-[#8f8b8b14]">
      <div className="container flex items-center justify-center">
        <div className="md:flex items-center gap-7 hidden rounded-4xl px-4 z-[9999]">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <div
                key={index}
                className={`relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300
                  ${isActive ? "border-b glow-border" : "after:bg-gray-200" }`}
              >
                <a className="gradient-title text-lg" href={item.href}>
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

