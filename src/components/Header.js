import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-br from-black z-10 flex justify-between'>
      <img className='w-56' src="https://i.imgur.com/jhpjiZJ.png" alt="header-logo"/>
      { user && (
        <div className='flex p-2'>
        <img className='w-12 h-12' alt="user-icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className='bg-red-600 rounded-lg p-2 m-2 text-white font-bold'>Sign Out</button>
      </div>   )
      }
    </div>
    
  )
}

export default Header
