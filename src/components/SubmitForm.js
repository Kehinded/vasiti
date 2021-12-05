import React, { useState, useContext } from "react";
import LogoLoad from "../assets/Vectoricon-fill.svg";
import LogoTimes from "../assets/xicon-not-fill.svg";
import "../styles/Form.css";
import VasitiContext from "../store/Context";

const SubmitForm = () => {
  const vasitiCtx = useContext(VasitiContext)
  const [errors, seterrors] = useState({
    errorPic: false,
    errorfirstname: false,
    errorsecondname: false,
    errorText: false,
    errorcheck: false,
    errorlocation: false,
  });

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    role: "",
    location: "",
    text: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      image: details.picture,
    name: `${details.firstName} ${details.lastName}`,
    location: details.location,
    role: details.role,
    text: details.text,
    }
    if(details.firstName === ""){
      seterrors((prev) => {
        return {...prev, errorfirstname: true}
      })
    }
    if (details.lastName === "") {
      seterrors((prev) => {
        return { ...prev, errorsecondname: true };
      });
    }

    if (details.picture === "") {
      seterrors((prev) => {
        return { ...prev, errorPic: true };
      });
    } 
    if (details.role === "") {
      seterrors((prev) => {
        return { ...prev, errorcheck: true };
      });
    }
    if (details.text === "") {
      seterrors((prev) => {
        return { ...prev, errorText: true };
      });
    }
     else {
      //  console.log(obj);
     const res = await vasitiCtx.addToListFunc(obj);
     if(res !== undefined && res === "success"){
       seterrors({errorPic: false, errorText: false, errorlocation: false, errorcheck: false, errorsecondname: false, errorfirstname: false})
       setDetails({firstName: "", lastName: "", text: "", role: "", location: ""})
      }
    }
      
  };


  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <p className="title big">Share your amazing story!</p>
        <div className="form-group big">
          <label htmlFor="image" className="label">
            Upload your Picture
          </label>
          <div className="input-group">
            <input
              type="file"
              className="input"
              onChange={(e) => setDetails((prev) => {
                return {
                  ...prev,
                  picture: URL.createObjectURL(e.target.files[0]),
                };
              })}
            />
            <img src={details.picture ? LogoTimes : LogoLoad}  alt="" className="logo" />
          </div>
          {errors.errorPic && <p className="text">picture is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            type="text"
            className="input input-small"
            value={details.firstName}
            onChange={(e) =>
              setDetails({ ...details, firstName: e.currentTarget.value })
            }
          />
          {errors.errorfirstname && <p className="text">name is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="secondName" className="label">
            Last Name
          </label>
          <input
            type="text"
            className="input input-small"
            value={details.lastName}
            onChange={(e) =>
              setDetails({ ...details, lastName: e.currentTarget.value })
            }
          />
          {errors.errorsecondname && <p className="text">name is required</p>}
        </div>
        <div className="form-group big">
          <label htmlFor="textarea" className="label">
            Share your story
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="input"
            value={details.text}
            onChange={(e) =>
              setDetails({ ...details, text: e.currentTarget.value })
            }
          ></textarea>
          {errors.errorText && <p className="text">story is required</p>}
        </div>
        <div className="check-group big">
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
                value="customer"
                onChange={(e) =>
                  setDetails({ ...details, role: e.currentTarget.value })
                }
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
                value="vendor"
                onChange={(e) =>
                  setDetails({ ...details, role: e.currentTarget.value })
                }
              />
              <label htmlFor="radio-two" className="radio-two">
                Vendor
              </label>
            </div>
            {errors.errorcheck && <p className="text">role is required</p>}
          </div>
        </div>
        {vasitiCtx.showModal.customer && (
          <div className="form-group big">
            <label htmlFor="image" className="label">
              City or Higher Institution (for Students)
            </label>
            <div className="input-group">
              <input
                type="text"
                className="input"
                value={details.location}
                onChange={(e) =>
                  setDetails({ ...details, location: e.currentTarget.value })
                }
              />
            </div>
            {errors.errorlocation && (
              <p className="text">location is required</p>
            )}
          </div>
        )}
        <input
          type="submit"
          className="submit"
          value={`${
            vasitiCtx.showModal.loading ? "submitting..." : "Share your story!"
          }`}
        />
      </form>
    </>
  );
};

export default SubmitForm;
