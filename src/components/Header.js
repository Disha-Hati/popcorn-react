import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { POPCORN_LOGO } from '../utils/constant';
import { toggleGPTSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);

 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearch=()=>{
    dispatch(toggleGPTSearchView());
  }


  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-br from-black z-10 flex justify-between'>
      <img className='w-56' src={POPCORN_LOGO} alt="header-logo"/>
      { user && ( <div className='flex p-2'>
        <button className='bg-red-900 text-white px-2 h-10 rounded-lg ml-2 mr-5 ' onClick={handleGPTSearch}>{showGPTSearch?"Home Page":"GPT Search"}</button>
        <img className='w-11 h-10' alt="user-icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className='text-white font-bold bg-red-600 px-2 h-10 rounded-lg ml-2'>Sign Out</button>
      </div>)
      }
    </div>
    
  )
}

export default Header
