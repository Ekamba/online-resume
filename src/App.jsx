import React from "react";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/skills/Skills";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Testimonial from "./components/experiences/Experiences";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <div className="divider"></div>
      <Footer />
    </>
  );
};

export default App;
