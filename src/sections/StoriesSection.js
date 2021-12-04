import React from "react";
import MainStory from "../components/MainStory";
import Story from "../fragments/Story";
import StoryBox from "../fragments/StoryBox";
import "../styles/Stories.css";
import { defaultUserOne } from "../store/defaultUser";

const StoriesSection = () => {
  return (
    <div className="stories-section">
      <div className="customer-box">
        <MainStory />
      </div>
      <div className="stories-box">
        <StoryBox>
          {defaultUserOne.map((child, index) => {
            const { name, text, image, location, role } = child;
            return (
              <Story
                key={index}
                name={name}
                text={text}
                role={role}
                location={location}
                Img={image}
              />
            );
          })}
        </StoryBox>
      </div>
      {/* second box */}
      <div className="customer-box customer-two">
        <MainStory switchChange={true} />
      </div>
    </div>
  );
};

export default StoriesSection;
