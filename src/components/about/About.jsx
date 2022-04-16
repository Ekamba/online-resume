import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src="/assets/axel.jpg" alt="aboutMe" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            My name is Axel Ekamba and I am a web and mobile developer with
            background knowledge of MERN stacks with Redux, along with a knack
            of building applications with utmost efficiency. Strong professional
            and willing to be an asset for an organization.
          </p>
          <a href="#contact" className="btn btn__primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
