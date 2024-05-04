import React, { useRef } from 'react'
import openai from '../utils/openai';

const GPTSearchBar = () => {

    const searchText=useRef(null);

    const handleGPTSearchButton=async ()=>{

        const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query:"+searchText.current.value+".Only give me 5 movies, comma separated like the Example given ahead. Example:Hera,Pheri,Sum,Com,Golmaal";
       const gptResults= await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          if(!gptResults.choices){
            //Error
          }

          console.log(gptResults.choices[0]?.message.content );
    }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'  onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-md' placeholder='What would you like to watch today?'/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchButton}>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar
