import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePlayingSeries from '../hooks/usePlayingSeries';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
usePlayingSeries();

const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);

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

      {
        showGPTSearch?<GPTSearch/>:<> <MainContainer/>
      <SecondaryContainer/></>
      }


     


    </div>
  )
}

export default Browse
