import React, { Component } from 'react'

import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <SearchableMovieReviewsContainer />
                <LatestMovieReviewsContainer />
            </div>
        )
    }
}