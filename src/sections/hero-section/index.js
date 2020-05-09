import React from 'react';
import './hero.styles.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay">
        <div className="container">
          <div className="title">
            <h4>LEARN ON DEMAND</h4>
            <h2>LEARN FROM THE BEST OF BEST</h2>
          </div>

          <div className="header-content">
            <div className="content-item-1">
              <h4>Fresh Content</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div className="content-item-2">
              <h4>Trusted Instructore</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div className="content-item-3">
              <h4>Flexible learning</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
