import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" className='p-4 m-4 col-span-9 rounded-md' placeholder='What would you like to watch today?'/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar
