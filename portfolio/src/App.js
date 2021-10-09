import React, { useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Portfolio />;
    }
    if (currentPage === 'Blog') {
      return <Contact />;
    }
    if (currentPage === 'Blog') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div className="App">
      <Navbar
      currentPage={currentPage}
      handlePageChange={handlePageChange}
></Navbar>
{renderPage()}
    </div>
  );
}

export default App;
