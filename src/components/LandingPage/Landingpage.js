import React from 'react';
import './Landingpage.css'


function LandingPage() {
    
    const navigateToHomePage = () => {
      window.location.href=`${process.env.PUBLIC_URL}/home`;
    };
  
    return (
      <div className="landing-page">
      <button className="explore-button" onClick={navigateToHomePage}>
      See What's On
      </button>
    </div>
    );
  }

export default LandingPage;