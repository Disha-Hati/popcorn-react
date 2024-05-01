import React from 'react'

const VideoTitle = ({title,overview}) => {


  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black opacity-70  '>
    <div className=''>
    <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg w-1/4 py-6'>{overview}</p>
    </div>
      
      <div>
        <button className='bg-white text-black  w-10 p-4 px-12  mx-2 py-1 text-xl rounded-md pl-2 hover:bg-opacity-70'>Play</button>
        <button className='bg-gray-400 opacity-40 text-black  w-10 mx-2  p-7 text-xl rounded-md'>More </button>
      </div>
    </div>
  )
}

export default VideoTitle
