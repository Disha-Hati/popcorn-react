import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constant'
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const[isSignIn,setIsSignIn]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }


    const handleButtonClick=()=>{
      //validate the form data
      const message=validateData(email.current.value,password.current.value);
      setErrorMessage(message);

      if(message) return; //not valid-> no need to login

      //sign in/sign up
      if(!isSignIn){
        //sign up
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                      displayName: name.current.value, 
                      photoURL: "https://i.pinimg.com/originals/d5/9c/90/d59c9002030448f1193adf7d7600a52a.png"
                    }).then(() => {
                      // Profile updated!
                      const {uid,email,displayName,photoURL} = auth.currentUser;
                      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                      navigate("/browse");
                    }).catch((error) => {
                      // An error occurred
                      setErrorMessage(error.message);
                    });
                    
                    
                      })
              .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
              });
        
      }else{
        //sign in

        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                      const user = userCredential.user;
                      navigate("/browse");
                })
                .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode+"-"+errorMessage);
              });

      }

    }


  return (
    <div>
      <Header/>

      <div className='absolute'>
        <img src={BG_URL} alt="bg-img"/>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
      <h1 className='font-bold text-3xl py-4'>{isSignIn?"Sign In":"Sign Up"} </h1>
        {!isSignIn &&<input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>}
        <input type="text" placeholder='Email Address'ref={email} className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
        <input type="password" placeholder='Password' ref={password} className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
        <p className='font-bold text-red-800 py-2'>{errorMessage}</p>
        <button  className='p-4 my-6 bg-red-800 w-full rounded-lg' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer ' onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign up Now!":"Already a Member?Sign in Now!"}</p>
      </form>
    </div>
  )
}

export default Login
