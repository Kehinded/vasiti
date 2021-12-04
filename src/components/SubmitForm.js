import React, { useState } from "react";
import LogoLoad from "../assets/Vectoricon-fill.svg";
import LogoTimes from "../assets/xicon-not-fill.svg";
import "../styles/Form.css";

const SubmitForm = () => {
  const [errors, seterrors] = useState({
    errorPic: false,
    errorname: true,
    errorText: false,
    errorcheck: false,
  });

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    role: "",
    text: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <p className="title">Share your amazing story!</p>
        <div className="form-group">
          <label htmlFor="image" className="label">
            Upload your Picture
          </label>
          <div className="input-group">
            <input
              type="file"
              className="input"
              value={details.picture}
              onChange={(e) => setDetails()}
            />
            <img src={LogoLoad} className="logo" />
          </div>
          {errors.errorPic && <p className="text">picture is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="lebel">
            First Name
          </label>
          <input
            type="text"
            className="input"
            value={details.picture}
            onChange={(e) => setDetails(e.currentTarget.value)}
          />
          {errors.errorname && <p className="text">name is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="secondName" className="label">
            Last Name
          </label>
          <input type="text" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea" className="label">
            Share your story
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="input"
          ></textarea>
          {errors.errorText && <p className="text">picture is required</p>}
        </div>
        <div className="check-group">
          <label htmlFor="checkbox" className="label">
            What did you interact with Vasiti as?
          </label>
          <div className="radio-box">
            <div className="radio-one-box">
              <input
                type="radio"
                className="radio-one"
                name="radio"
                id="radio-one"
              />
              <label htmlFor="radio-one" className="radio-one">
                Customer
              </label>
            </div>
            <div className="radio-two-box">
              <input
                type="radio"
                className="radio-two"
                name="radio"
                id="radio-two"
              />
              <label htmlFor="radio-two" className="radio-two">
                Vendor
              </label>
            </div>
          </div>
          {errors.errorcheck && <p className="text">picture is required</p>}
        </div>
        <input type="submit" className="submit" value="Share your story!" />
      </form>
    </>
  );
};

export default SubmitForm;
