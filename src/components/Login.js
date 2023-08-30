import Header from './Header';
import { useRef, useState } from 'react';
import checkValidData from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate the form data
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // Sign In / Sign Up
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg'
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
