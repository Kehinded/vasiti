import React from 'react'
import ImageBox from '../fragments/ImageBox'
import MainInfoBox from '../fragments/MainInfoBox';
import CusImg from "../assets/customer-img-bg.png"

const MainStory = ({switchChange}) => {
    if(switchChange){
        return (
          <div className="main-box">
            <div className="left-box"></div>
            <div className="right-box">
              <ImageBox />
            </div>
          </div>
        );
    }
    return (
      <div className="main-box">
        <div className="left-box">
          <ImageBox image={CusImg} width="60%" />
        </div>
        <div className="right-box">
          <MainInfoBox
            title="Tolu & Joy’s Experience"
            role="CUSTOMER"
            text="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
            shareText="Share your own story!"
          />
        </div>
      </div>
    );
}

export default MainStory