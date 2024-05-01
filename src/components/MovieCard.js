import React from 'react'
import { TMDB_IMG_Poster } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={TMDB_IMG_Poster+poster_path} alt="Poster"/>
    </div>
  )
}

export default MovieCard
