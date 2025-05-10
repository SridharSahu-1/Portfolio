import { useState } from "react";
import { projectsList } from "../../constants";
import Macbook from "../../components/Macbook";
import GradientSphere from "../../components/GradientSphere";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiRedux, SiFirebase, SiHtml5, SiCss3 } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const iconMap = {
  React: <FaReact size={20} />,
  Redux: <SiRedux size={20} />,
  Firebase: <SiFirebase size={20} />,
  HTML: <SiHtml5 size={20} />,
  CSS: <SiCss3 size={20} />,
  Github: <FaGithub size={20} />,
  ExternalLink: <HiOutlineExternalLink size={20} />,
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projectsList.length;
  const project = projectsList[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="projects"
      className="grid h-dvh grid-cols-1 lg:grid-cols-2 gap-2 relative"
    >
      <GradientSphere
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      <div className="flex flex-col justify-between h-full p-8 border-white/10 border-r pt-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg overflow-auto h-full flex flex-col justify-between mb-20">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-white">
                {project.projectName}
              </h2>
            </div>
            <ul className="space-y-3 mb-6">
              {project.projectDescription.map((line, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block min-h-2 min-w-2 rounded-full mt-2.5 mr-2 bg-indigo-200"></span>
                  <span className="text-gray-200 leading-7">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-indigo-200">
              <span className="text-white">Tech Stacks Used:</span>
              <div className="flex flex-wrap gap-4">
                {project.tags &&
                  project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center justify-center w-10 h-10 rounded-full hover:translate-y-1 hover:ease-in-out cursor-pointer"
                      title={tag}
                    >
                      {iconMap[tag] || (
                        <span className="text-indigo-200 text-sm">{tag}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center 2xl:mb-6 gap-2 text-indigo-200">
              <span className="text-white">Links:</span>
              <div className="flex items-center justify-center gap-4">
                <a
                  className="hover:translate-y-1 hover:ease-in-out"
                  target="_blank"
                  href={project.githubUrl}
                >
                  {iconMap["Github"]}
                </a>
                <a
                  target="_blank"
                  href={project.projectUrl}
                  className="hover:translate-y-1 hover:ease-in-out cursor-pointer"
                >
                  {iconMap["ExternalLink"]}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
          <div
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Previous project"
          >
            <img src="images/arrowLeft.svg" />
          </div>
          <div
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Next project"
          >
            <img src="images/arrowRight.svg" />
          </div>
          <span className="text-sm text-gray-400">
            {currentIndex + 1}/{total}
          </span>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-indigo-400 hover:text-indigo-200 font-medium transition-colors"
          >
            Visit Project →
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-dvh md:h-full overflow-auto pt-20 pb-5">
        <Macbook projectUrl={project.projectUrl} />
        <span className="mt-2 text-gray-400">
          You can use the laptop to view my project
        </span>
      </div>
    </section>
  );
};

export default Projects;
