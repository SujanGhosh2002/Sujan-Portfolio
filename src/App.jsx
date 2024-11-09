import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProfileCard from "./components/Deno";
import Resume from "./components/Deno";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-primary">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
