import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
