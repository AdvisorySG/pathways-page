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
          Pathways is a specially curated series of skills development courses
          led by industry professionals from established companies, aimed at
          helping students succeed in the real world by upgrading themselves and
          learning important skills not taught inside the classroom.
        </p>
        <p>
          In this pilot run, Advisory is proud to partner Facebook to deliver
          four distinct skills pathways, skills that Facebook employees use
          day-to-day in their roles. Over the course of four months from August
          to November 2021, experience hands-on guidance from Facebook staff
          from your faculty of choice, as well as interaction with like-minded
          individuals, in hourly-long classes each month.
        </p>
        <p>
          This programme is open to students aged 16-28. For queries, please
          feel free to reach out to us at{" "}
          <a href="mailto:mentoring@advisory.sg">mentoring@advisory.sg</a>.
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
          to apply. Applications close on <b>8 August 2021, 2359h (GMT +8)</b>.
        </p>
        <p>
          Click{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1w7zlMuGY_7hVXeW0LaNKXWWjLRt3ic4G/view?usp=sharing"
          >
            here
          </a>{" "}
          to view the application guide on CVs and resumes.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
