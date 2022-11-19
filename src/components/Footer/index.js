import React from "react";
import gitHub from "../../assets/images/gitHub.png";
import linkedIn from "../../assets/images/linkedIn.png";

function Footer() {
  return (
    <footer>
      <h3>Made by Jeremy Parson</h3>

      <div>
        <a href="https://github.com/parsonjd">
          <img src={gitHub} alt="github repository" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/jeremyparson/">
          <img src={linkedIn} alt="linkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
