import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  console.log(movies);
  return (
    <div className=' bg-black '>
      <div className='-mt-52 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Comedy Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Recommended Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Popcorn Original Series"} movies={movies.playingSeries}/>
      
      </div>
    </div>
  )
}

export default SecondaryContainer
