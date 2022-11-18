import React from "react";
import gitHub from "../../assets/images/gitHub.png";
import linkedIn from "../../assets/images/linkedIn.png";

function Footer() {
  return (
    <footer>
      <h3>Made by Jeremy Parson</h3>
      <p>
        <div>
          <a href="https://github.com/parsonjd">
            <img
              src={gitHub}
              style={{ width: "50%" }}
              alt="github repository"
            />
          </a>
          <a href="https://www.linkedin.com/in/jeremyparson/">
            <img src={linkedIn} style={{ width: "50%" }} alt="linkedIn" />
          </a>
        </div>
      </p>
    </footer>
  );
}

export default Footer;
