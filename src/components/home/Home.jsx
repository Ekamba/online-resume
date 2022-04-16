import React from "react";
import "./home.css";
import CTA from "./CTA";
import HomeSocials from "./HomeSocials";

const Home = () => {
  return (
    <header id="home">
      <div className="container home__container">
        <h5>Hello, my name is</h5>
        <h1>Axel Ekamba</h1>
        <h5 className="light__text">I'm a full-stack developer</h5>
        <CTA />
        <HomeSocials />

        <div className="me">
          <img src="/assets/me.png" alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Home;
