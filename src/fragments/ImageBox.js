import React from 'react'
import ImageLog from "../assets/headerimg.jpg"

const ImageBox = ({image, height, width}) => {
    return (
      <div className="other-box">
        <figure className="img-box">
          <img
            style={{ height: height, width: width }}
            src={image || ImageLog}
            alt=""
            className="img"
          />
        </figure>
      </div>
    );
}

export default ImageBox
