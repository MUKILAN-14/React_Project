import React from 'react';
import './FeatureSection.css'; 
import movie1 from '../../Assets/Images/movie1.jpg'
import movie4 from '../../Assets/Images/movie4.jpg'
import movie3 from '../../Assets/Images/movie3.jpg'
const FeaturedSection = () => {
  return (
    <div className="featured-section">
      <img
        src={movie1}
        alt="The Adventure of Blue Sword"
        className="featured-image"      />
      <img
        src={movie4}
        alt="The Adventure of Blue Sword"
        className="featured-image"      />
      <img
        src={movie3}
        alt="The Adventure of Blue Sword"
        className="featured-image"      />
      
    </div>
  );
};

export default FeaturedSection;
