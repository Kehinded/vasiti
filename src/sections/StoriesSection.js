import React, { useContext } from "react";
import MainStory from "../components/MainStory";
import VasitiContext from "../store/Context";
import Story from "../fragments/Story";
import StoryBox from "../fragments/StoryBox";
import "../styles/Stories.css";
import { defaultUserOne, defaultusersTwo } from "../store/defaultUser";

const StoriesSection = () => {
  const vasitiCtx = useContext(VasitiContext);
  return (
    <div className="stories-section">
      <div className="customer-box">
        <MainStory />
      </div>
      <div className="stories-box">
        <StoryBox>
          {vasitiCtx.customerList.map((child, index) => {
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
      {/* second users */}
      <div className="stories-box section-up">
        <StoryBox>
          {vasitiCtx.vendorList.map((child, index) => {
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
    </div>
  );
};

export default StoriesSection;
