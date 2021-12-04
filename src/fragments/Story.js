import React from "react";
import UserImg from "../assets/userone.jpg";

const Story = ({ Img, name, location, role, text }) => {
  return (
    <div className="story">
      <figure className="img-box">
        <img src={Img || UserImg} alt="" className="img" />
      </figure>
      <div className="name">{name || "john smith"}</div>
      <div className="location-role-box">
        <div className="location">{location || "in lagos"}</div>
        <div className={`role ${role.toLowerCase()}`}>
          <span>{role || "vendor"}</span>
        </div>
      </div>
      <p className="text">
        {text ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae porro consectetur ducimus eaque veritatis illo adipisci nesciunt rerum quis! Quis."}
      </p>
    </div>
  );
};

export default Story;
