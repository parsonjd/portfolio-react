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
    </div>
  );
}

export default Header;
