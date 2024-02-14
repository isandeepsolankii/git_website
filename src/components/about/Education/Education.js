import React from "react";
import "./Education.css";
function Education() {
  return (
    <div>
      <div className="container">
        <div className="row edu_container">
          <div className="col-12 col-lg-10">
            <p className="college_name">
              Sree Dattha Institute of Engineering and Science, Hyderabad
            </p>
          </div>
          <div className="col-12 col-lg-2">
            <p className="edu_date">June 2018 - July 2022</p>
          </div>
          <p className="course_name">
            Bachelor of Technology: Computer Science Engineering
          </p>
          <ul>
            <li className="relavant_course">
              <span className="edu_date">Relevant Coursework: </span>Operating
              Systems, Computer Networks, Data Structure and Algorithms, Web
              technology.
            </li>
          </ul>
        </div>
        <div className="row edu_container">
          <div className="col-12 col-lg-10">
            <p className="college_name">Narayana Junior College, Hyderabad</p>
          </div>
          <div className="col-12 col-lg-2">
            <p className="edu_date">Mar 2016 - Apr 2018</p>
          </div>
          <p className="course_name">Board of Intermediate: Science - MPC</p>
          <ul>
            <li className="relavant_course">
              <span className="edu_date">Relevant Coursework: </span>Linear
              Algebra, Discrete Mathematics, Co-ordinate Geometery , Physics,
              Chemistry.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
