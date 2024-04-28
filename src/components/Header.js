import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { POPCORN_LOGO } from '../utils/constant';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);

 

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


  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-br from-black z-10 flex justify-between'>
      <img className='w-56' src={POPCORN_LOGO} alt="header-logo"/>
      { user && ( <div className='flex p-2'>
        <img className='w-12 h-12' alt="user-icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className='bg-red-600 rounded-lg p-2 m-2 text-white font-bold'>Sign Out</button>
      </div>)
      }
    </div>
    
  )
}

export default Header
