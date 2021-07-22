import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import { advisoryLogo, advisoryPathwaysLogo } from "../assets";

import "./header.css";

const NavBar = () => (
  <div className="nav">
    <a className="nav-back-to-main-site" href="https://advisory.sg">
      <IoIosArrowBack className="nav-arrow-icon" />
      back to main site
    </a>
    <img className="nav-logo" src={advisoryLogo} alt="Advisory" />
  </div>
);

const Header = () => (
  <div className="header">
    <NavBar />
    <div className="header-bottom">
      <img
        className="header-pathways-logo"
        src={advisoryPathwaysLogo}
        alt="Advisory Pathways Programme"
      />
      <div className="header-pathways-intro">
        <p>
          Pathways is a series of skills development courses that helps students
          succeed in the real world by upgrading themselves and learning
          important skills not taught inside the classroom.
        </p>
        <p>
          Click{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://advisorysg.typeform.com/to/UG7Vri8s#source=pathwaysite"
          >
            here
          </a>{" "}
          to apply. Applications close <b>??? (GMT +8).</b>
        </p>
      </div>
    </div>
  </div>
);

export default Header;
