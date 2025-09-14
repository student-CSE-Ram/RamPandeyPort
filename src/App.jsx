import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Pre from "./components/Pre";
import { ScrollToTop } from "./components/ScrollToTop";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Resume from "./components/Resume/Resume";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // Simulate loading delay (2 sec), or remove when your assets are ready
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <div className="relative min-h-screen w-full bg-[#0d0d1f] text-white">
        <ScrollToTop />

        <NavBar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
