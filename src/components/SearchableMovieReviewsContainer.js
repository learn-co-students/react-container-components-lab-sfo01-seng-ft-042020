import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      reviews: [],
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitSearch = event => {
    event.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        reviews: obj.results
      })
    })
    
  }

  render() {
    return (
    <div className="searchable-movie-reviews">
      <form 
        onSubmit={this.submitSearch}
      >
        <input type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
        <button type="submit">Search</button>

      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
    );
  }
}

export default SearchableMovieReviewsContainer;