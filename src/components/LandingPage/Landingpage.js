import React from 'react';
import './Landingpage.css'


function LandingPage() {
    
    const navigateToHomePage = () => {
      window.location.href='/home'
    };
  
    return (
      <div className="landing-page">
      <button className="explore-button" onClick={navigateToHomePage}>
        Explore
      </button>
    </div>
    );
  }

export default LandingPage;