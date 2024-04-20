import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constant'

const Login = () => {

    const[isSignIn,setIsSignIn]=useState(true);

    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
      <Header/>

      <div className='absolute'>
        <img src={BG_URL} alt="bg-img"/>
      </div>

      <form className='w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
      <h1 className='font-bold text-3xl py-4'>{isSignIn?"Sign In":"Sign Up"} </h1>
        {!isSignIn &&<input type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
        <button  className='p-4 my-6 bg-red-800 w-full rounded-lg'>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer ' onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign up Now!":"Already a Member?Sign in Now!"}</p>
      </form>
    </div>
  )
}

export default Login
