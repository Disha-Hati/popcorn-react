import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/constant';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_options);
    const json=await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
    getUpcomingMovies();
    })
}

export default useUpcomingMovies;
