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
      <CarrerExpertSection />
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
