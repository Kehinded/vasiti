import React from "react";
import "../styles/Footer.css";
import FootterImg from "../assets/footer-img.png";
import FooterText from "../assets/footer-text.png";
import ListItem from "../fragments/ListItem";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const listOne = [
    "company",
    "about us",
    "Term of Use",
    "Privacy Policy",
    "Press & Media",
  ];
  const listTwo = [
    "Products",
    "Marketplace",
    "Magazine",
    "Seller",
    "Wholesale",
    "Services",
  ];
  const listThree = [
    "Careers",
    "Become a Campus Rep",
    "Become a Vasiti Influencer",
    "Become a Campus writer",
    "Become an Affiliate",
  ];
  const listFour = [
    "Get in touch",
    "Contact us",
    "Partner with us",
    "Partner with us",
    "Help/FAQs",
  ];
  return (
    <div className="footer" id="contact-section">
      <div className="box-1">
        <figure className="img-box">
          <img src={FootterImg} alt="" className="img" />
        </figure>
        <div className="text-box">
          <div className="title">
            <img src={FooterText} alt="" />
          </div>
          <p className="text">
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <div className="btn-box">
            <span>enter your email address</span>
            <button className="btn">subscribe</button>
          </div>
        </div>
      </div>
      {/* box one end */}
      <div className="box-2">
        <div className="box">
          <ListItem list={listOne} />
        </div>
        <div className="box">
          {" "}
          <ListItem list={listTwo} />
        </div>
        <div className="box">
          {" "}
          <ListItem list={listThree} />
        </div>
        <div className="box">
          {" "}
          <ListItem list={listFour} />
        </div>
        <div className="box">
          <div className="title">Join our community</div>
          <div className="icon-box">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
          <p className="text">Email Newsletter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
