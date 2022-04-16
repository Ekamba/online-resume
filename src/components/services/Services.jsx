import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icons" />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Framer.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Adobe Illustrator CC.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Adobe InDesign.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Adobe PhotoShop.</p>
            </li>
          </ul>
        </article>

        {/*End of UI/UX Design*/}

        <article className="service">
          <div className="service__head">
            <h3>web Development</h3>
          </div>
          <ul className="service__list">
            <h4>In Frontend I work most with:</h4>
            <li>
              <BiCheck className="service__list__icons" />
              <p>JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>ReactJS.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>React Native.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>NextJS.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Python.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>HTML, CSS, Bootstrap, Tailwind CCS ...</p>
            </li>
            <h4>In Backend I work most with:</h4>
            <li>
              <BiCheck className="service__list__icons" />
              <p>NodeJS.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Express.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>MongoDB.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>MySQL.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Firebase and much more.</p>
            </li>
          </ul>
        </article>

        {/*End of web development*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icons" />
              <p>Web application.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Mobile application.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Design.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>Mentoring.</p>
            </li>
            <li>
              <BiCheck className="service__list__icons" />
              <p>help for website ideas.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
