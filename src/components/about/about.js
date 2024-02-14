import React from "react";
import "./about.css";
import Work from "./Work/Work";
import Education from "./Education/Education";

function About() {
  return (
    <div>
      <div className="personal_about_container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2">
              <p className="about_info ml-5">ABOUT</p>
            </div>
            <div className="col-12 col-lg-10">
              <div className="line"></div>
            </div>
          </div>
          <div className="row about_row">
            <div className="col-12 col-lg-6">
              <img
                src="Photos/profile-pic.png"
                alt="profile_picture"
                className="img-fluid about_img"
              />
            </div>
            <div className="col-12 col-lg-6">
              <p className="hello_text">Hello, Welcome</p>
              <p className="name_info">I'm Sandeep Solanki</p>
              <p className="personal_about">
                I am an IT Professional with 1.5 years of experience in the
                field, possessing good knowledge in the areas of development. My
                technical expertise includes React, Python Flask, and
                JavaScript.
              </p>
              <a
                className="btn btn-danger contact_button nav_font"
                href="/contact"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <p className="about_info ml-5">Work Experience</p>
            </div>
            <div className="col-12 col-lg-8">
              <div className="line"></div>
            </div>
          </div>
          <div className="work_history_container">
            <Work />
          </div>
          <div className="row">
            <div className="col-12 col-lg-2">
              <p className="about_info ml-5">Education</p>
            </div>
            <div className="col-12 col-lg-10">
              <div className="line"></div>
            </div>
          </div>
          <div className="work_history_container">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
