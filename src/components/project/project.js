import React from "react";
import "./project.css";

function Project() {
  const projects = [
    {
      id: 0,
      name: "Secure Rental Agreement Using BlockChain.",
      description: `A web-based application, transforms traditional lease agreements into secure smart contracts, enhancing the leasing process's efficiency.
       Facilitating a blockchain-powered smart contract between tenants and landlords, it ensures digital signatures on terms like rental value, payment frequency,
        and property details. The contract automates lease payments from tenants to landlords per the agreed terms, offering seamless transactions.`,
      image: "Photos/sra.jpg",
      link: "#",
      github:
        "https://github.com/isandeepsolankii/Secure_Rental_Agreement_Using_Blockchain",
    },
    {
      id: 1,
      name: "Online Portfolio.",
      description: `Developed a personal portfolio using React.js to showcase my projects and skills. Highlighted key projects, technical abilities, and provided a glimpse into my coding style`,
      image: "Photos/op.png",
      link: "#",
      github: "https://github.com/isandeepsolankii/My_Website/tree/portfoili",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-2">
            <p className="about_info ml-5">Projects</p>
          </div>
          <div className="col-12 col-lg-10">
            <div className="line"></div>
          </div>
        </div>
        {projects.map((project) => (
          <div key={project.id} className="row project_container">
            <div className="col-12 col-lg-8 project_details">
              <p className="project_name">{project.name}</p>
              <p className="project_description">{project.description}</p>
              <div className="source_link">
                <a
                  href={project.github}
                  className="github_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="Photos/github_s.png"
                    alt="github_logo"
                    className="git_image"
                  />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <img
                src={project.image}
                className="img-fluid project_image"
                alt={project.name}
              />
            </div>

            <hr className="hr_line" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
