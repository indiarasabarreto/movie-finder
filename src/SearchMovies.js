import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);


  const searchMovies = async (e) => {
      e.preventDefault();

      const url = `https://api.themoviedb.org/3/search/movie/?api_key=ccf51b54cf4d6e3435cb04590ab53ffa&language=pt-BR&query=${query}&include_adult=false`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }


  }

  return (
    <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Nome do filme: </label>
            <input 
              className="input" 
              type="text" 
              name="query" placeholder="Busque um filme por nome, ano ou gênero..."
              value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="button" type="submit">Buscar</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
               <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </>
  )
}