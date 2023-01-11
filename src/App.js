import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <SocialIcon />
          <SocialIcon
            url="https://github.com/in/jaketrent"
            className="App-logo"
            alt="logo"
          />
        </motion.div>

        <Typewriter words={("Sainuu", "Pinecone")} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
