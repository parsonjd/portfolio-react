import React from "react";
import myResume from "../../assets/resume/Jeremy_Parson_Resume.pdf";
import logo from "../../assets/images/logo.png";

function Resume() {
  return (
    <div className="resume">
      <section>
        <div>
          <h2 className="section-header">My Resume</h2>
        </div>
        <div>
          <div>
            <div className="resume-download">
              <a href={myResume} className="logo">
                <img src={logo} style={{ width: "100%" }} alt="download logo" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tech">
        <div className="tech-table front-end">
          <p className="table-title">Front-End</p>
          <p className="table-text">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>

        <div className="tech-table back-end">
          <p className="table-title">Back-End </p>
          <p className="table-text">
            <ul>
              <li>Node.Js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>ORM</li>
              <li>MVC</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
