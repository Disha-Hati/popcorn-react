import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

useNowPlayingMovies();

  return (
    <div>
      <Header/>
      {
        /**
        Main Container
          -Video BG
          -Video Title
        Secondary Container
          -Movielist *n
            -cards*n
         */
      }

      <MainContainer/>
      <SecondaryContainer/>


    </div>
  )
}

export default Browse
