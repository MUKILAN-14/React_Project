import React from 'react';
import Header from './Header';
import FeaturedSection from './FeatureSection';
import './HomePage.css'
const Homepage = ()=> {
    return (
        <div id='content'>
            <Header/>
            <FeaturedSection/>
        </div>
    );
}

export default Homepage;