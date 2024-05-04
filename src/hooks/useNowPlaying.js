import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options);
    const json=await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
    !nowPlayingMovies && //memoization
     getNowPlayingMovies(); 
    })
}

export default useNowPlayingMovies;