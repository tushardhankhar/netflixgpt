import React, { useState } from 'react'
import Header from './Header'

export default function Login() {
   const[isSignIn , setIsSignIn] = useState(true)

   function toggleSignIn() {
    setIsSignIn(!isSignIn)
   }
  return (
    <div className='absolute'>
        <Header/>
        <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='' />
        <form className='absolute top-0 left-0 right-0 w-1/4 mt-56  mx-auto flex flex-col px-6 py-8 text-white gap-6  bg-black bg-opacity-60'>
           <h1 className='text-3xl font-semibold'> {isSignIn ? "Sign In" : "Sign Up"  } </h1>
           {
            !isSignIn && <input type='text' placeholder='Full Name' className='p-4 rounded-lg bg-gray-800 ' />
           }
           
            <input type='text' placeholder='Email Address' className='p-4 rounded-lg bg-gray-800 ' />
            <input type='password' placeholder='Password' className='p-4 rounded-lg bg-gray-800' />
            <button className='bg-red-700 p-4 rounded-lg '>Sign In</button>
            <p className=''>{isSignIn ? "New to Netflix?" : "Already a user?"} <span className='font-medium cursor-pointer ' onClick={() => toggleSignIn()}>{isSignIn ? "Sign Up Now" : "Sign In"}</span> </p>
        </form>
    </div>
  )
}
