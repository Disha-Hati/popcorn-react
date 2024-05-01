import React, { useEffect, useState } from 'react'
import { API_options } from '../utils/constant'


const VideoBackGround = ({movieid}) => {

  //const dispatch=useDispatch();
  //const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
  const [trailerKey,setTrailerKey]=useState(null);
  const id=movieid;

    const getMovieVideo= async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",API_options); 
        const json=await data.json();
        console.log(json.results);

        const filterTrailer=json.results.filter(video=>video.type==='Trailer')
        console.log(filterTrailer);

        const trailer=filterTrailer.length?filterTrailer[0]:json.results[0];
        setTrailerKey(trailer.key);
        //dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideo();
    },[]);


  return (
    <div>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerKey +"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackGround
