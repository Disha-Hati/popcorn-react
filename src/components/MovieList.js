import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);

  return (
    <div className='p-6'>
     <h1 className='font-semibold py-5 text-3xl'>{title}</h1>
        <div className='flex overflow-x-scroll'>
           
            <div className='flex'>
            {/*movies.map(movie=> <MovieCard key={movie.id} poster_path={movie.poster_path}/>)*/}
            <MovieCard poster_path={movies[0].poster_path}/>
            </div>
        </div>
    </div>
  )
}

export default MovieList
