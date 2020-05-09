import React, { Component } from 'react';
import './popular-courses.styles.css';
import CardItem from './components/CardItem';

const URL = 'https://5ea5cbca2d86f00016b46276.mockapi.io/api/courses';

class PopularCourses extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ courses: data });
      })
      .catch(console.log);
  }

  render() {
    const { courses } = this.state;
    return (
      <div className="card-wrapper">
        <div className="card-wrapper-container">
          <div className="title-container">
            <h4>POPULAR COURSES</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="courses-list">
            {courses.map((course, index) => (
              <CardItem key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCourses;
