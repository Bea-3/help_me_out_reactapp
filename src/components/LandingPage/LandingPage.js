import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from './HeroSection';
import './landingPage.css';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const LandingPage = () => {
    return ( 
        <div className="container">
             <div className="nav">
               <Navbar/>
             </div>
             <div className="hero-section">
               <HeroSection/>
             </div>
             <div className="features">
               <Features/>
             </div>
             <div className="howItWorks">
               <HowItWorks/>
             </div>
             <div className="footer">
               <Footer/>
             </div>
        </div>
     );
}
 
export default LandingPage;