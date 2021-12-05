import React from "react";
import "../styles/Header.css"
import HeaderNav from "../components/HeaderNav";
import HeaderMain from "../components/HeaderMain";
import HeaderNarTwo from "../components/HeaderNarTwo";

const HeaderSection = () => {
  return (
    <div className="header-section" id="about-section">
      <HeaderNav />
      <div className="underline-box"></div>
      <HeaderNarTwo />
      <div className="underline-box"></div>
      <HeaderMain />
    </div>
  );
};

export default HeaderSection;
