import React, { PureComponent } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends PureComponent {
    state = {
        reviews: []
    }
    
    componentDidMount() {
        fetch(URL)
            .then(resp=>resp.json())
            .then(json=>this.setNewMovies(json.results))
    }

    setNewMovies(data) {
        const picked = [];
        for (let movie of data) {
            const {summary_short, display_title} = movie;
            picked.push({summary: summary_short, title: display_title})
        }
        this.setState({reviews: picked})
    }

    render() {
        return <div className='latest-movie-reviews'>
            <h2>Latest Movie Reviews</h2>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    }
}