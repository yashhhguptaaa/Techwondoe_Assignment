import './App.css';
import Nav from './components/NavbarSection/navbar';
import Banner from './components/BannerSection/banner';
import WhyAboutUs from './components/WhyChooseUsSection/whyChooseUs';
import BannerSectionTwo from './components/BannerSectionTwo/BannerSectionTwo';
import LatestNewsSection from './components/LatestNewsSection/latestNews';
import CandidateEmployersSection from './components/CandidateEmployerSection/CandidateEmployer';
import CarrerExpertSection from './components/CarrerExpertSection/careerExpert';
import Footer from './components/FooterSection/footer';
import CopyrightSection from './components/CopyrightSection/copyrightSection';
import useContentful from './useContentful';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <WhyAboutUs />
      <BannerSectionTwo />
      <LatestNewsSection />
      <CandidateEmployersSection />
      <CarrerExpertSection />
      <Footer />
      <CopyrightSection />
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
