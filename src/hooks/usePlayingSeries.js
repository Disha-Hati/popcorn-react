import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/constant';
import { addPlayingSeries } from '../utils/movieSlice';

const usePlayingSeries = () => {
    const dispatch=useDispatch();

    const getPlayingSeries=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1',API_options);
    const json=await data.json();
    console.log(json.results);
    dispatch(addPlayingSeries(json.results));
    }

    useEffect(()=>{
    getPlayingSeries();
    })
}

export default usePlayingSeries;
