import React from "react";
import ImageLogo from "../assets/vasiti-logo.jpg"
import {Link} from "react-scroll"

const HeaderNav = () => {
  return (
    <div className="header-nav-box">
      <div className="box-one">
        <img src={ImageLogo} alt="" className="img" />
      </div>
      <div className="box-two">
        <ul className="list">
         <Link className="item">about us</Link>
         <Link className="item">stories</Link>
         <Link className="item">contact</Link>
         <Link className="item">login</Link>
         <Link className="item">sign up</Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
