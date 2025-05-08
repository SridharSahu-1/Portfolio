import { useState } from "react";
import { projectsList } from "../../constants";
import Macbook from "../../components/Macbook";
import GradientSphere from "../../components/GradientSphere";

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
      className="grid h-screen grid-cols-1 lg:grid-cols-2 gap-2 relative"
    >
      <GradientSphere
        sphere1Class={"projects-gradient-sphere projects-sphere-1"}
        sphere2Class={"projects-gradient-sphere projects-sphere-2"}
      />
      <div className="flex flex-col justify-between h-full p-8 border-white/10 border-r pt-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg overflow-auto h-full flex flex-col justify-between mb-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-white">
                {project.projectName}
              </h2>
            </div>
            <ul className="space-y-3 mb-6">
              {project.projectDescription.map((line, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full mt-2 mr-2 bg-indigo-200"></span>
                  <span className="text-gray-200">{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags &&
              project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-indigo-900/30 text-indigo-200 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
          {/* <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Previous project"
          >
            prev
          </button> */}
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
          {/* <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Next project"
          >
            next
          </button> */}
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

      <div className="flex flex-col justify-center items-center h-full overflow-auto pt-20 pb-5">
        <Macbook projectUrl={project.projectUrl} />
        <span className="mt-2 text-gray-400">
          You can use the laptop to view my project
        </span>
      </div>
    </section>
  );
};

export default Projects;
