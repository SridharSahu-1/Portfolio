import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Hero />
      {/* <About /> */}
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
