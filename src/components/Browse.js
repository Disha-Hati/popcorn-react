import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();

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
