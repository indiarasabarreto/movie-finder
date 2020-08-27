import React, { Component } from 'react';
import SearchMovies from './SearchMovies';


export default class App extends Component {
  render() {
    return (
      <div className="container">
          <h1 className="title">Movies</h1>
          <SearchMovies />
      </div>
    )
  }
}
