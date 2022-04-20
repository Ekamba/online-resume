import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="frontend__skills">
          <h3>Frontend development</h3>
          <div className="skills__content">
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>HTML</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>CSS</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>ReactJS</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>React Native</h4>
                <small className="text__light">Intermediate</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>NextJS</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>Git and Github</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend__skills">
          <h3>Backend development</h3>
          <div className="skills__content">
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>NodeJS</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>Express</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="skills__detail">
              <BsPatchCheckFill className="skills__detail__icons" />
              <div>
                <h4>Firebase</h4>
                <small className="text__light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
