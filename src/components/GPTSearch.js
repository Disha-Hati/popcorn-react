import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchSuggestion from './GPTSearchSuggestion'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
        <img src={BG_URL} alt="bg-img"/>
      </div>
      <GPTSearchBar/>
      <GPTSearchSuggestion/>
    </div>
  )
}

export default GPTSearch
