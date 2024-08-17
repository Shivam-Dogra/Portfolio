import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import shivam from "../assets/images/portfolio-image.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={shivam} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Shivam-Dogra" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shivamdogra/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 >Shivam Dogra</h1>
          <p>Test Automation | Full stack development</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Shivam-Dogra" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shivamdogra/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;