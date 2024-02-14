import React from "react";
import "./contact.css";
import Social from "./social/social";
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <p className="about_info ml-5">Connect with me</p>
          </div>
          <div className="col-12 col-lg-8">
            <div className="line"></div>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default Contact;
