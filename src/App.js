import "./App.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Navbar/Nav";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;
