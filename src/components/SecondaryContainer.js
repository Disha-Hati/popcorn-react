import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  console.log(movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Recommended Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popcorn Original Series"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer
