import React from "react";
import { BsLinkedin, BsGithub, BsGlobe2 } from "react-icons/bs";

const HomeSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/axel-ekamba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Ekamba"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://ekambaportfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGlobe2 />
      </a>
    </div>
  );
};

export default HomeSocials;
