import React from "react";
import "./Work.css";

function Work() {
  const socialList = [
    {
      id: 0,
      name: "HTML5",
      Source: "Photos/html-5.png",
      alternative: "html",
    },
    {
      id: 1,
      name: "CSS3",
      Source: "Photos/css-3.png",
      alternative: "css",
    },
    {
      id: 2,
      name: "JavaScript",
      Source: "Photos/js.png",
      alternative: "javascript",
    },
    {
      id: 3,
      name: "Bootstrap",
      Source: "Photos/bootstrap.png",
      alternative: "bootstrap",
    },
    {
      id: 4,
      name: "ReactJS",
      Source: "Photos/logo192.png",
      alternative: "react",
    },
    {
      id: 5,
      name: "Python",
      Source: "Photos/python.png",
      alternative: "python",
    },
    {
      id: 6,
      name: "Flask",
      Source: "Photos/icons8-flask-48.png",
      alternative: "flask",
    },
    {
      id: 7,
      name: "Django",
      Source: "Photos/Django.png",
      alternative: "django",
    },
    {
      id: 8,
      name: "MSSQL",
      Source: "Photos/sql-server.png",
      alternative: "mssql",
    },
    {
      id: 9,
      name: "GIT",
      Source: "Photos/git.png",
      alternative: "git",
    },
    {
      id: 10,
      name: "GitHub",
      Source: "Photos/github-sign.png",
      alternative: "github",
    },
    {
      id: 11,
      name: "Cloud Basics  (Azure)",
      Source: "Photos/azure.png",
      alternative: "azure",
    },
  ];
  return (
    <div>
      <div>
        <img
          src="Photos/CitiusTech.png"
          alt="citiusTech_logo"
          className="img-fluid citius_logo"
        />
      </div>
      <div className="row color_class">
        <div className="col-12 col-lg-10">
          <p className="company_name">
            Citiustech Healthcare Technology Private Limited, Bangalore
          </p>
        </div>
        <div className="col-12 col-lg-2">
          <p className="exp_date">Aug 2022 - Dec 2023</p>
        </div>
        <p>Trainee Software Engineer</p>
        <div>
          <dl>
            <dt>Projects: Explainable AI</dt>
            <dd>
              <ul>
                <li>
                  I actively contributed in Explainable AI(XAI) by creating a
                  dynamic and visually engaging frontend using React and backend
                  by creating APIs using Flask (web framework).
                </li>
                <li>Converted requirements into the project plan.</li>
                <li>
                  Worked closely with the design team to turn design mockups
                  into working user interface components.
                </li>
                <li>
                  Created APIs using Flask for smooth communication between the
                  front and back ends.
                </li>
                <li>
                  Overcome challenges by finding creative solutions and seeking
                  guidance when needed.
                </li>
              </ul>
            </dd>
          </dl>
          <p className="subHeading_text">Trainings:</p>

          <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 text-center">
            {socialList.map((social) => (
              <div key={social.id} className="col">
                <div className="p-3">
                  <div>
                    <img
                      src={social.Source}
                      alt={social.alternative}
                      className="img-fluid  trainings_logo"
                    />
                    <p className="icon_name">{social.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
