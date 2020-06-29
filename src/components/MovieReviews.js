// Code MovieReviews Here
import React from 'react';

const DisplayMovie = ({byline, display_title, link}, i) => {
  return (
    
    <div className="review" key={i}>  
      <h2>{display_title}</h2>
      <p>{byline}</p>
      <a href={link.url}>{link.suggested_link_text}</a>
  </div>
  )
}

const MovieReviews = ({ reviews }) => {

  return (
    
  <div className="review-list">{reviews.map((review,index)  => {return DisplayMovie(review, index)})}</div>
  )
}

export default MovieReviews;
