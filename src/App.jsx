import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { AboutMe } from "./components/AboutMe";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar /> {/* Navbar should be inside Router */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
