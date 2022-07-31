import './App.css';
import Nav from './components/NavbarSection/navbar';
import Banner from './components/BannerSection/banner';
import WhyAboutUs from './components/WhyChooseUsSection/whyChooseUs';
import BannerSectionTwo from './components/BannerSectionTwo/BannerSectionTwo';
import LatestNewsSection from './components/LatestNewsSection/latestNews';
import CandidateEmployersSection from './components/CandidateEmployerSection/CandidateEmployer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <WhyAboutUs />
      <BannerSectionTwo />
      <LatestNewsSection />
      <CandidateEmployersSection />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
