import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Navbar from "./components";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NavbarMenu from "./components";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./pages/Education";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      <Hero />
      <Education />
      <Contact />
      <Project />
    </>
  );
}

export default App;
