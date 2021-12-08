import React from "react";
import ImageLogo from "../assets/vasiti-logo.jpg"
import {Link} from "react-scroll"

const HeaderNav = () => {
  return (
    <div className="header-nav-box">
     <div className="header-nav-box-wrap">
        <div className="box-one">
        <img src={ImageLogo} alt="" className="img" />
      </div>
      <div className="box-two">
        <ul className="list">
          <Link to="about-section" spy={true} smooth={true} className="item">
            about us
          </Link>
          <Link to="stories-section" spy={true} smooth={true} className="item">
            stories
          </Link>
          <Link to="contact-section" spy={true} smooth={true} className="item">
            contact
          </Link>
          <Link to="" className="item">login</Link>
          <Link to="" className="item">sign up</Link>
        </ul>
      </div>
     </div>
    </div>
  );
};

export default HeaderNav;
