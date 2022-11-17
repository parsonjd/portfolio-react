import React from "react";
import budgetBuddy from "../../assets/images/budgetBuddy.png";
import wineDine from "../../assets/images/wineDine.png";
import weather from "../../assets/images/weather.png";
import techBlog from "../../assets/images/techBlog.png";
import gitHub from "../../assets/images/gitHub.png";

function Portfolio() {
  return (
    <div>
      <section className="projects">
        <div>
          <h2 className="section-header">Projects</h2>
        </div>

        <div className="project">
          <div className="project-stuff">
            <div className="project-img">
              <a href="https://budget-buddy-group-project.herokuapp.com/">
                <img
                  src={budgetBuddy}
                  style={{ width: "100%" }}
                  alt="Budget Buddy"
                />
              </a>
              <div className="git-hub">
                <a href="https://github.com/shawnbandy/FinancialBudgeting">
                  <img
                    src={gitHub}
                    style={{ width: "20%" }}
                    alt="github repository"
                  />
                </a>
              </div>
            </div>
            <div className="project-description">
              <h4>Budget Buddy</h4>
              <p>
                Budget Buddy is a hands-on and easy-to-use money management web
                application. The app allows users to view, manage, and
                distribute their expenses all in one user-friendly dashboard.
                This full-stack web application was built using the MVC
                paradigm, handlebars.js and tailwind as the front-end UI and JS
                for scripting.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-stuff">
            <div className="project-img">
              <a href="https://parsonjd.github.io/Wine-Dine/">
                <img
                  src={wineDine}
                  style={{ width: "100%" }}
                  alt="Wine & Dine"
                />
              </a>
              <div className="git-hub">
                <a href="https://github.com/parsonjd/Wine-Dine">
                  <img
                    src={gitHub}
                    style={{ width: "20%" }}
                    alt="github repository"
                  />
                </a>
              </div>
            </div>
            <div className="project-description">
              <h4>Wine & Dine</h4>
              <p>
                A mobile-first, front end application using the Bulma framework
                and two server-side APIs. This application is a one-stop shop
                database for meals and drinks, designed for a user who is hungry
                or thirsty and wants a nice quick meal or an adult beverage. It
                utilizes the spoonacular and cocktaildb APIs.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-stuff">
            <div className="project-img">
              <a href="https://parsonjd.github.io/weather-dashboard/">
                <img
                  src={weather}
                  style={{ width: "100%" }}
                  alt="weather dashboard"
                />
              </a>
              <div className="git-hub">
                <a href="https://github.com/parsonjd/weather-dashboard">
                  <img
                    src={gitHub}
                    style={{ width: "20%" }}
                    alt="github repository"
                  />
                </a>
              </div>
            </div>
            <div className="project-description">
              <h4>Weather Dashboard</h4>
              <p>
                A web based weather dashboard showing the current weather of a
                city based on user input. Current weather data includes
                temperature, wind velocity, humidity and UV index. There is also
                a five day forecast for that location. This is a front end
                application utilizing a server side API.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-stuff">
            <div className="project-img">
              <a href="https://tech-blog-jdp.herokuapp.com/">
                <img src={techBlog} style={{ width: "100%" }} alt="Tech Blog" />
              </a>
              <div className="git-hub">
                <a href="https://github.com/parsonjd/tech-blog">
                  <img
                    src={gitHub}
                    style={{ width: "20%" }}
                    alt="github repository"
                  />
                </a>
              </div>
            </div>
            <div className="project-description">
              <h4>Tech Blog</h4>
              <p>
                This is a CMS style blog site where developers can publish their
                blog posts and comment on other developers' posts as well. The
                app follows the MVC paradigm using handlebars.js as the
                templating engine, Sequelize as the ORM and the express-sesssion
                npm package for authentication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
