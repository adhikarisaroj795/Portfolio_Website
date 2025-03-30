import React from "react";
import "./about.css";
import coder1 from "../../assets/images/icons/coder 1.svg";
import gamepad from "../../assets/images/icons/gamepad-solid 1.svg";
import lightbulb from "../../assets/images/icons/lightbulb-solid 1.svg";
import { BiSolidDownArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaFolder } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Bio from "../../components/aboutus-components/Bio/Bio";
import Interest from "../../components/aboutus-components/interest/Interest";

const About: React.FC = () => {
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
            <div className="about-me-col2-content-row1">
              <MdKeyboardArrowRight /> <FaFolder className="folder-color1" />{" "}
              <span>bio</span>
            </div>
            <div className="about-me-col2-content-row1">
              <MdKeyboardArrowRight /> <FaFolder className="folder-color2" />{" "}
              <span>interest</span>
            </div>
            <div className="about-me-col2-content-row1">
              <MdKeyboardArrowRight /> <FaFolder className="folder-color3" />{" "}
              <span>education</span>
            </div>
            <div className="about-me-col2-content-row1">
              <MdKeyboardArrowRight /> <FaFolder className="folder-color4" />{" "}
              <span>skills</span>
            </div>
            <div className="about-me-col2-content-row1">
              <MdKeyboardArrowRight /> <FaFolder className="folder-color5" />{" "}
              <span>service</span>
            </div>
            <div className="about-me-col2-content-row1">
              <MdKeyboardArrowRight /> <FaFolder className="folder-color6" />{" "}
              <span>experience</span>
            </div>
          </div>
        </div>
        <div className="about-me-col3">
          <div className="about-me-col3-heading">
            <BiSolidDownArrow />
            <span>Personal-info</span>
            <RxCross2 className="about-cross" />
          </div>

          <div className="about-me-col3-main-content">
            {/* <Bio /> */}

            <Interest />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
