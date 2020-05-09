import React from 'react';
import './top-course.styles.css';

const TopCourses = () => {
  return (
    <div className="top-wrapper">
      <h3>Top Courses</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam,{' '}
      </p>

      <div className="image-grid">
        <div className="word-press">
          <div className="overlay_"></div>
          <h3>BECOME A WORDPRESS EXPERT</h3>
        </div>
        <div className="python">
          <h3>COMPLTETE PYTHON MASTERCLASS </h3>
        </div>
        <div className="excel">
          <h3>BEIGINNER TO PRO Excel</h3>
        </div>
        <div className="js-ninja">
          <h3>THE ULTIMATYE COURSE FOR JAVASCRIPT VANILLA</h3>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
