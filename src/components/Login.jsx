import Header from './Header';
import { useRef, useState } from 'react';
import checkValidData from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND, USER_IMG } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    let message = null;
    // Validate the form data
    !isSignInForm
      ? (message = checkValidData(
          name.current.value,
          email.current.value,
          password.current.value
        ))
      : (message = checkValidData(email.current.value, password.current.value));

    setErrorMessage(message);
    if (message) return; // if message is present(not null) then don't execute code after this and return

    // Sign Up / Sign In
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_IMG,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: USER_IMG,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src={BACKGROUND}
          alt='banner'
        />
      </div>
      <form className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            className='w-full my-4 p-4 bg-gray-800 rounded-lg'
            ref={name}
            type='text'
            placeholder='Full Name'
          />
        )}
        <input
          className='w-full my-4 p-4 bg-gray-800 rounded-lg'
          ref={email}
          type='text'
          placeholder='Email Address'
        />
        <input
          className='w-full my-4 p-4 bg-gray-800 rounded-lg'
          ref={password}
          type='password'
          placeholder='Password'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className='p-4 my-6 w-full bg-red-600 rounded-lg'
          onClick={handleButtonClick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already registered Sign In Now...'}
        </p>
      </form>
    </div>
  );
};

export default Login;
