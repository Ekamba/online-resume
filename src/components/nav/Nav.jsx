import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActiveNav("#home")}
      >
        <div className="wrapper">
          <div className="icon home">
            <div className="tooltip">home</div>
            <span>
              <AiOutlineHome className="i" />
            </span>
          </div>
        </div>
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <div className="wrapper">
          <div className="icon about">
            <div className="tooltip">about</div>
            <span>
              <AiOutlineUser className="i" />
            </span>
          </div>
        </div>
      </a>
      <a
        href="#skills"
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => setActiveNav("#skills")}
      >
        <div className="wrapper">
          <div className="icon skills">
            <div className="tooltip">skills</div>
            <span>
              {" "}
              <GiSkills className="i" />
            </span>
          </div>
        </div>
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <div className="wrapper">
          <div className="icon services">
            <div className="tooltip">services</div>
            <span>
              <BiMessageSquareDetail className="i" />
            </span>
          </div>
        </div>
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        onClick={() => setActiveNav("#projects")}
      >
        <div className="wrapper">
          <div className="icon projects">
            <div className="tooltip">projects</div>
            <span>
              <AiOutlineFundProjectionScreen className="i" />
            </span>
          </div>
        </div>
      </a>
      <a
        href="#experiences"
        className={activeNav === "#experiences" ? "active" : ""}
        onClick={() => setActiveNav("#experiences")}
      >
        <div className="wrapper">
          <div className="icon experiences">
            <div className="tooltip">experiences</div>
            <span>
              <BiBook className="i" />
            </span>
          </div>
        </div>
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <div className="wrapper">
          <div className="icon contact">
            <div className="tooltip">contact</div>
            <span>
              <RiServiceLine className="i" />
            </span>
          </div>
        </div>
      </a>
    </nav>
  );
};

export default Nav;
