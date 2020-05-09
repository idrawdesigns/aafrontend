import React from 'react';
import './card-item.styles.css';

import im from '../../../assets/4.jpg';
import avatar from '../../../assets/avatar.jpg';

const CardItem = ({ course }) => {
  const {
    title,
    author,
    users,
    rating,
    price,
    comments,
    duration,
    image,
    author_avatar,
  } = course;
  return (
    <div className="card">
      <div className="course-image">
        <div className="main-image">
          <img src={image} alt={title} />
        </div>

        <img src={author_avatar} alt={author} className="avatar" />
      </div>

      <div className="container_">
        <h4>
          <b>{title}</b>
        </h4>
        <p className="author">{author}</p>

        <div className="price-star">
          <p className="price">{price}</p>
          <p>Rating : {rating}</p>
        </div>

        <p className="divider"></p>

        <div className="details">
          <p>{users}</p>
          <p>{comments}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
