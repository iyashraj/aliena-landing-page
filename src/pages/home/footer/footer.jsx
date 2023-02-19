import React from "react";
import AlienLogo from "../../../assets/alien-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="logo-section">
        <img src={AlienLogo} alt="alien_loo" className="web-logo" />
        <p>Aliena</p>
      </div>
      <div className="services">
        <div className="servicess">
          <p className="service-tag">Solutions</p>
          <div className="service-item">Marketing</div>
          <div className="service-item">Copyrighting</div>
          <div className="service-item">GRAPHIC DESIGN</div>
          <div className="service-item">DEVELOPMENT</div>
        </div>
        <div className="servicess">
          <p className="service-tag">Services</p>
          <div className="service-item">PHOTO PRODUCTION</div>
          <div className="service-item">LOGISTICS</div>
          <div className="service-item">CONSULTATIONS</div>
          <div className="service-item">SOUND DESIGN</div>
        </div>
        <div className="servicess">
          <p className="service-tag">Resource</p>
          <div className="service-item">Case Studies</div>
          <div className="service-item">Blog</div>
          <div className="service-item">I'm a client</div>
        </div>
        <div className="servicess">
          <p className="service-tag">Company</p>
          <div className="service-item">About Us</div>
          <div className="service-item">Careers</div>
          <div className="service-item">Newsrooom</div>
          <div className="service-item">Contact Us</div>
        </div>
      </div>
      <div className="copyright">
        {" "}
        Copyright 2023 Aliana Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
