import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import "./App.css";
//Allows to set the title of the application
import { Helmet } from "react-helmet";

function App() {
  const [currentPage, handlePageChange] = useState("");

  //Based on value of current page, this function will render that page.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Helmet>
        <title>My Portfolio | {currentPage} </title>
      </Helmet>

      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>

      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
