import React, { PureComponent } from 'react';
import 'isomorphic-fetch'

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends PureComponent {
    state = {
        query: '',
        reviews: []
    }
    
    trackQuery = (e) => {
        this.setState({query: e.target.value})
    }

    newQuery = (e) => {
        e.preventDefault();
        const q = this.state.query;
        if (q) {
            fetch(`${URL}&query=${q}`)
                .then(resp=>resp.json())
                .then(json=>this.setNewMovies(json.results))
        }
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
        return <div className='searchable-movie-reviews'>
            <div className='search-area'>
                <form onSubmit={this.newQuery}>
                    <input onChange={this.trackQuery} placeholder = 'Enter Keyword' size='25' type='text' />
                    <button>Find Reviews</button>
                </form>
            </div>
            <div>
                <h2>Movies by Keyword</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        </div>
    }
}