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

  // const [details, setDetails] = useState({
  //   firstName: "",
  //   lastName: "",
  //   picture: "",
  //   role: "",
  //   location: "",
  //   text: "",
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      image: vasitiCtx.userdetails.picture,
      name: `${vasitiCtx.userdetails.firstName} ${vasitiCtx.userdetails.lastName}`,
      location: vasitiCtx.userdetails.location,
      role: vasitiCtx.userdetails.role,
      text: vasitiCtx.userdetails.text,
    };
    // console.log(obj);
    if(vasitiCtx.userdetails.firstName === ""){
      seterrors((prev) => {
        return {...prev, errorfirstname: true}
      })
    }
    if (vasitiCtx.userdetails.lastName === "") {
      seterrors((prev) => {
        return { ...prev, errorsecondname: true };
      });
    }

    if (vasitiCtx.userdetails.picture === "") {
      seterrors((prev) => {
        return { ...prev, errorPic: true };
      });
    } 
    if (vasitiCtx.userdetails.role === "") {
      seterrors((prev) => {
        return { ...prev, errorcheck: true };
      });
    }
    if (vasitiCtx.userdetails.text === "") {
      seterrors((prev) => {
        return { ...prev, errorText: true };
      });
    }
     else {
      //  console.log(obj);
     vasitiCtx.addToListFunc(obj);
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
              onClick={() => seterrors({ ...errors, errorPic: false })}
              type="file"
              className="input"
              onChange={(e) =>
                vasitiCtx.setuserdetailFunc(
                  "picture",
                  URL.createObjectURL(e.target.files[0])
                )
              }
            />
            <img
              src={vasitiCtx.userdetails.picture ? LogoTimes : LogoLoad}
              alt=""
              className="logo"
            />
          </div>
          {errors.errorPic && <p className="text">picture is required</p>}
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            onClick={() => seterrors({ ...errors, errorfirstname: false })}
            type="text"
            className="input input-small"
            value={vasitiCtx.userdetails.firstName}
            onChange={(e) =>
              vasitiCtx.setuserdetailFunc("first-name", e.currentTarget.value)
            }
          />
          {errors.errorfirstname && (
            <p className="text">first name is required</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="secondName" className="label">
            Last Name
          </label>
          <input
            onClick={() => seterrors({ ...errors, errorsecondname: false })}
            type="text"
            className="input input-small"
            value={vasitiCtx.userdetails.lastName}
            onChange={(e) =>
              vasitiCtx.setuserdetailFunc("last-name", e.currentTarget.value)
            }
          />
          {errors.errorsecondname && (
            <p className="text">last name is required</p>
          )}
        </div>
        <div className="form-group big">
          <label htmlFor="textarea" className="label">
            Share your story
          </label>
          <textarea
            onClick={() => seterrors({ ...errors, errorText: false })}
            name=""
            id=""
            cols="30"
            rows="3"
            className="input"
            value={vasitiCtx.userdetails.text}
            onChange={(e) =>
              vasitiCtx.setuserdetailFunc("text", e.currentTarget.value)
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
                onClick={() => seterrors({ ...errors, errorcheck: false })}
                type="radio"
                className="radio-one"
                name="radio"
                id="radio-one"
                value="customer"
                onChange={(e) =>
                  vasitiCtx.setuserdetailFunc("role", e.currentTarget.value)
                }
              />
              <label htmlFor="radio-one" className="radio-one radio-label">
                Customer
              </label>
            </div>
            <div className="radio-two-box">
              <input
                onClick={() => seterrors({ ...errors, errorcheck: false })}
                type="radio"
                className="radio-two"
                name="radio"
                id="radio-two"
                value="vendor"
                onChange={(e) =>
                  vasitiCtx.setuserdetailFunc("role", e.currentTarget.value)
                }
              />
              <label htmlFor="radio-two" className="radio-two radio-label">
                Vendor
              </label>
            </div>
          </div>
          {errors.errorcheck && <p className="text">role is required</p>}
        </div>
        {vasitiCtx.showModal.customer && (
          <div className="form-group big">
            <label htmlFor="image" className="label">
              City or Higher Institution (for Students)
            </label>
            <div className="input-group">
              <input
                type="text"
                className="input input-two"
                value={vasitiCtx.userdetails.location}
                onChange={(e) =>
                  vasitiCtx.setuserdetailFunc("location", e.currentTarget.value)
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
          className="submit big"
          value={`${
            vasitiCtx.showModal.loading ? "submitting..." : "Share your story!"
          }`}
        />
      </form>
    </>
  );
};

export default SubmitForm;
