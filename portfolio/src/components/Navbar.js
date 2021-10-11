import React from "react";

export default function Navbar(currentPage, handlePageChange) {
  return (
    <div>
      <div className='navbar'>
        <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href='#Home' onClick={() => handlePageChange('Home')}>Home</a>
        <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href='#About' onClick={() => handlePageChange('About')}>About</a>
        <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href='#Portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
        <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href='#Resume' onClick={() => handlePageChange('Resume')}>Resume</a>
        <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href='#Contact' onClick={() => handlePageChange('Contact')}>Contact</a>
      </div>
    </div>
  );
}