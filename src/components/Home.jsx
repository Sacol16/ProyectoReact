import React from 'react';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';



function Home() {
  return (
    <div className="Home">
      <NavBar />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default Home;
