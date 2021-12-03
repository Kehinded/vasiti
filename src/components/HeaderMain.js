import React from 'react'
import ImageBox from '../fragments/ImageBox';
import Image from "../assets/header-bg-main.png"

const HeaderMain = () => {
    return (
      <div className="main-content">
        <div className="text-box">
          <div>
            <h3>Amazing </h3>
            <h3>Experiences from Our </h3>
            <h3>Wonderful Customers</h3>
            <p className="text">
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </div>
        </div>
        <div className="right-box">
          <ImageBox image={Image} />
        </div>
      </div>
    );
}

export default HeaderMain
