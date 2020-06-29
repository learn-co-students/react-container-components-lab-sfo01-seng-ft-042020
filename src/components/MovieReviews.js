import React from 'react'

import Movie from './Movie'

const MovieReviews = props => (
        <div className='review-list'>
            {props.reviews.map(rev=>(<Movie summary={rev.summary} title={rev.title} />))}
        </div>
    )

export default MovieReviews;