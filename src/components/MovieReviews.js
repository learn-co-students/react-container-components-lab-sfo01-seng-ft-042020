import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
          {reviews.map((review) => (
              <div className="review" key={review.display_title}>
                <h3>Review Title: {review.display_title}</h3>
                <p>Publication Date: {review.publication_date}</p>
              </div>
          ))}
    </div>
)

export default MovieReviews