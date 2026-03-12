import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { AboutMe } from "./components/AboutMe";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <Router basename="/react-portfolio">
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
           <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;