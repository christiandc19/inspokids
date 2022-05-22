import React, { useState } from 'react';
import NavTabs from './nav/Nav';
import Home from './home/Home'
import Services from './services/Services';
import About from './about/About';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Gallery') {
      return <Gallery />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
