import React from 'react'

const Movie = props => (
    <div className='movie'>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
    </div>
)

export default Movie;