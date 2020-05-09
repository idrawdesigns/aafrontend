import React from 'react';
import { render } from 'react-dom';
import './index.css';

//components
import TopNav from './sections/top-navbar';
import MainNavBar from './sections/main-navbar';
import Hero from './sections/hero-section';
import Service from './sections/service-section';
import PopularCourses from './sections/popular-courses';
import TopCourses from './sections/top-courses';

function App() {
  return (
    <div>
      <TopNav />
      <MainNavBar />
      <Hero />
      <Service />
      <PopularCourses />
      <TopCourses />
    </div>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
