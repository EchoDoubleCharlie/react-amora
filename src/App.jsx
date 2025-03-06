import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { AboutMe } from "./components/AboutMe";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
