import React, { useState } from "react";
import About from "../src/components/Pages/About";
import Contact from "../src/components/Pages/Contact";
import Navbar from "../src/components/Navbar";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Pages/Resume";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App d-flex flex-column justify-content-between">
      <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Navbar>
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
