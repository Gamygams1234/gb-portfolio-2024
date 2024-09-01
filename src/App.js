
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import AboutMe from "./Components/AboutMe";
import { clsx } from "clsx";
import {  useState } from "react";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ContactForm from "./Components/Form";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const classNames = clsx(["App", { dark: darkMode }]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={classNames}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <About />
      <AboutMe />
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer  darkMode={darkMode}/>
    </div>
  );
}

export default App;
