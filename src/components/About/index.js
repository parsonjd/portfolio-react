import React from "react";
import bioPic from "../../assets/images/bioPic.jpg";
function About() {
  return (
    <section className="about">
      <div>
        <h1 className="section-header">About Me</h1>
      </div>
      <div>
        <div className="about-me">
          <div className="my-img">
            <img src={bioPic} style={{ width: "100%" }} alt="bioPicture" />
          </div>
          <p>
            I am a junior web developer, eager to get started in full stack web
            development. I recently graduated from Georgia Tech's online
            bootcamp, completing multiple independent and group projects. I am a
            Navy veteran, retired after 25 years of service working in the
            Intelligence field. I have many years of experience working in a
            team environment but am extremely self-motivated to succeed and
            complete the tasks presented before me. I am happy to accept new
            challenges and strive to be the best at what I do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
