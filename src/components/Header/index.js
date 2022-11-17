import React from "react";
import Nav from "../Nav";

//Destructuring the props object
function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <section>
        <header>
          <div>
            <h1>Jeremy Parson</h1>
          </div>
          <div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="myPage">
        <div className="myPage-details">
          <h2>My Portfolio Page</h2>
          <p>
            Welcome to my portfolio. You can view the projects that I have built
            and frameworks utilized. Feel free to reach out. Thanks for
            visiting!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
