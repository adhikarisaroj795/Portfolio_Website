import React, { useState } from "react";
import "./about.css";
import coder1 from "../../assets/images/icons/coder 1.svg";
import gamepad from "../../assets/images/icons/gamepad-solid 1.svg";
import lightbulb from "../../assets/images/icons/lightbulb-solid 1.svg";
import { BiSolidDownArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaFolder } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

import Interest from "../../components/aboutus-components/interest/Interest";
import { aboutUsSideBar } from "./aboutusData";
import Bio from "../../components/aboutus-components/Bio/Bio";
import Education from "../../components/aboutus-components/Education/Education";
import Skills from "../../components/aboutus-components/Skills/Skills";

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("bio"); // Default to "bio"
  return (
    <section className="about-me-sec">
      <div className="about-me-wrapper flex">
        <div className="about-me-col1">
          <div className="aboutme-col1-row1">
            <img src={coder1} alt="icon" />
          </div>
          <div className="aboutme-col1-row1">
            <img src={gamepad} alt="icon" />
          </div>
          <div className="aboutme-col1-row1">
            <img src={lightbulb} alt="icon" />
          </div>
        </div>
        <div className="about-me-col2">
          <div className="about-me-col2-heading">
            <BiSolidDownArrow />
            <span>Personal-info </span>
          </div>
          <div className="about-me-col2-main-content">
            {aboutUsSideBar?.map(({ id, label, class: folderClass }) => (
              <div
                key={id}
                className={`about-me-col2-content-row1 ${
                  activeSection === id ? "about-active" : ""
                }`}
                onClick={() => setActiveSection(id)} // Set Active Section
              >
                <MdKeyboardArrowRight /> <FaFolder className={folderClass} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-me-col3">
          <div className="about-me-col3-heading">
            {/* <BiSolidDownArrow /> */}
            <span>{activeSection}</span>
            <RxCross2 className="about-cross" />
          </div>

          <div className="about-me-col3-main-content">
            {activeSection === "bio" && <Bio />}
            {activeSection === "interest" && <Interest />}
            {activeSection === "education" && <Education />}
            {activeSection === "skills" && <Skills />}
            {/* {activeSection === "service" && <Service />}
            {activeSection === "experience" && <Experience />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
