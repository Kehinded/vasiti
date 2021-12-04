import React from "react";
import UnderlineImg from "../assets/underlinebg.png";

const MainInfoBox = ({ colorText, title, role, text, shareText }) => {
  return (
    <div className={`main-text-box ${colorText}`}>
      <div className="title">{title || "Tolu & Joy’s Experience"}</div>
      <div className="role">{role || "CUSTOMER"}</div>
      <div className="text">
        {text ||
          "I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great"}
      </div>
      <div className="share-box">
        <p className="text">{shareText || "Share your own story!"}</p>
        <img src={UnderlineImg} alt="" className="img" />
      </div>
    </div>
  );
};

export default MainInfoBox;
