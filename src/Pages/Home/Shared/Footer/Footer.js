import React from "react";
import image from "../../../../Assets/images/pust.png";
import FooterText from "./FooterText";

const Footer = () => {
  return (
    <div>
      <footer className="items-center footer p-10  text-base-content">
        <div>
          <span className="footer-title text-custom-pink">IMportant Links</span>
          <a className="link link-hover">Admin Login</a>
          <a className="link link-hover">Teacher Login</a>
          <a className="link link-hover">Facebbok Pasge</a>
          <a className="link link-hover">Youtube Channel</a>
        </div>
        <div>
          <span className="footer-title text-custom-pink">Pages</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Alumni</a>
          <a className="link link-hover">Student login</a>
        </div>
        <div>
          <span className="footer-title text-custom-pink">Location</span>
          <a className="link link-hover">Google Map</a>
          <a className="link link-hover">Satellite view</a>
          <a className="link link-hover">Steet View</a>
        </div>
        <div className="w-full">
          <h2 className=" text-custom-pink sm:text-lg md:text-xl lg:text-2xl">
            Dept. of EECE, PUST
          </h2>
          <img className="w-28 md:w-32 lg:w-48" src={image} alt="" />
        </div>
      </footer>
      <FooterText></FooterText>
    </div>
  );
};

export default Footer;
