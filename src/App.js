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

function App() {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <About />
      <Contact />
      <Project />
      <Skills />
    </>
  );
}

export default App;
