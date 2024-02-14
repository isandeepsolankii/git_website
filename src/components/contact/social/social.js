import React from "react";
import "./social.css";

function Social() {
  const accounts = [
    {
      id: 1,
      image: "Photos/github_s.png",
      link: "https://github.com/isandeepsolankii",
      name: "Github",
    },
    {
      id: 2,
      image: "Photos/linkedin_s.png",
      link: "https://www.linkedin.com/in/notsandeep/",
      name: "LinkedIn",
    },
    {
      id: 3,
      image: "Photos/instagram_s.png",
      link: "https://www.instagram.com/isandeepsolanki",
      name: "Instagram",
    },
    {
      id: 4,
      image: "Photos/mail_s.png",
      link: "mailto:sandeepsolanki672s@gmail.com",
      name: "Mail",
    },
    {
      id: 5,
      image: "Photos/message_s.png",
      link: "/contact",
      name: "contact me",
    },
  ];
  return (
    <div className="social_container">
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 text-center">
          {accounts.map((account) => (
            <div key={account.id} className="col">
              <div className="p-3">
                <a
                  href={account.link}
                  className="icon_name"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={account.image}
                    alt={account.name}
                    className="img-fluid trainings_logo"
                  />
                  <p>{account.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Social;
