import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Now from "./sections/Now";
import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Hero />
      <Projects />
      <Experience />
      {/* <Skills /> */}
      <Now />
      <Contact />
    </div>
  );
}

export default App;
