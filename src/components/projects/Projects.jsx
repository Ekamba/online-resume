import React from "react";
import "./project.css";
import { projectsData } from "../../Data";

const Project = () => {
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {projectsData.map(
          ({ id, image, title, description, github, liveDemo }) => (
            <article className="project__item" key={id}>
              <div className="project__item__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project__item__cta">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                </a>
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-desktop"></i>
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Project;
