import React from "react";
import NavBar from "../navbar/navbar";
import Eclipse from "../eclipse/eclipse";
import About from "../about/about";
import Project from "../project/project";
import Contact from "../contact/contact";
import "./home.css";

function Home() {
  return (
    <div className="git_website">
      <div className="nav-bar-container">
        <NavBar />
      </div>
      <div className="eclipse_container">
        <Eclipse />
      </div>
      <div className="home_container">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6 col-info">
              <p className="greeting">
                Hi, I'm <span className="my-name">Sandeep</span>
              </p>
              <p className="designation">Software Engineer</p>
              <p className="my-info">
                Experienced IT Professional with a robust background in
                development, specializing in React, Python Flask, and
                JavaScript. Proven track record as a collaborative team player,
                excelling in interpersonal communication and showcasing
                self-motivation through proactive problem-solving. Holds a
                bachelor's degree in computer science engineering from India,
                underscoring a solid educational foundation in the field.
              </p>
              <a href="#contact" className="red-button m-1">
                Contact me
              </a>
              <a
                href="sandeep's_resume.pdf"
                download="sandeep's_resume.pdf"
                className="red-button m-1"
              >
                Resume
              </a>

              <p className="my-info">Find me on</p>
              <a
                href="https://github.com/isandeepsolankii"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Photos/git_i.png"
                  alt="github"
                  className="img-fluid social_icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/notsandeep/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Photos/linkedIn_i.png"
                  alt="linkedin"
                  className="img-fluid social_icon"
                />
              </a>
              <a
                href="https://www.instagram.com/isandeepsolanki/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="Photos/instagram_i.png"
                  alt="instagram"
                  className="img-fluid social_icon"
                />
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <div className="circle3"></div>
              <div className="circle2"></div>
              <div className="circle"></div>

              <img src="Photos/avatar.png" alt="dp" className="img-fluid dp" />
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="about_conatinerer">
        <About />
      </div>
      <div id="project" className="about_conatinerer">
        <Project />
      </div>
      <div id="contact" className="about_conatinerer">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
