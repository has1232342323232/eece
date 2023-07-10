import React from "react";
import FooterText from "./FooterText";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="items-center footer p-10 ">
        <div>
          <span className="footer-title text-custom-pink">Important Links</span>
          <Link to="/login" className="link link-hover">Login</Link>
          <Link to="https://www.pust.ac.bd" className="link link-hover">PUST Website</Link>
          <Link to="https://www.facebook.com/PUSTpage.edu" className="link link-hover">Facebook Page</Link>
          <Link to="https://www.buet.ac.bd/web/#/" className="link link-hover">BUET</Link>
        </div>
        <div>
          <span className="footer-title text-custom-pink">Pages</span>
          <Link to="/aboutUs" className="link link-hover">About us</Link>
          <Link to="/contactUs" className="link link-hover">Contact Us</Link>
          <Link to="https://www.ruet.ac.bd" className="link link-hover">RUET</Link>
          <Link to="" className="link link-hover">KUET</Link>
        </div>
        <div>
          <span className="footer-title text-custom-pink">Others</span>
          <Link to="https://www.google.com/maps/place/Pabna+University+of+Science+and+Technology/@24.0133251,89.2797365,20.5z/data=!4m6!3m5!1s0x39fe84f0ec23a72b:0x775d6cd53cbdad8b!8m2!3d24.0132789!4d89.2796812!16s%2Fm%2F05zw3sh?entry=ttu" className="link link-hover">Google Map</Link>
          <Link to="https://www.pust.ac.bd/administration/ICT-Cell" className="link link-hover">ICT Cell, PUST</Link>
          <Link to="https://cuet.ac.bd" className="link link-hover">CUET</Link>
          <Link to="https://ru.ac.bd" className="link link-hover">RU</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t text-base-content">
      <div className="flex items-center justify-center text-center">
      <div>
          <h2 className=" text-xl text-custom-pink ">
            Dept. of Electrical, Electronic and Communication Engineering, PUST
          </h2>
         <div className="flex items-center justify-center text-center"> <img className="w-1/6" src="https://i.ibb.co/pQchPqP/pust.png" alt="" /></div>
        </div>
      </div>
      </footer>
      <FooterText></FooterText>
    </div>
  );
};

export default Footer;
