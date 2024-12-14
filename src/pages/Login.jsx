/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";

import app from '../../Backend/firestore';
import Navbar from '../components/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';



const db = getFirestore(app);

const Login = () => {


  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const emailHandler = (e) => {
    setemail(e.target.value)
    console.log(email)
  }

  const emailPassword = (e) => {
    setpassword(e.target.value)
    console.log(password)
  }

  const getUserDataByEmail = async (email) => {
    try {
      const usersRef = collection(db, "Signup");
      console.log(usersRef)
      const q = query(usersRef, where("email", "==", email));

      const querySelector = await getDocs(q);

      if (!querySelector.empty) {

        const userDoc = querySelector.docs[0];
        console.log(userDoc.data());
        return userDoc.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    const storedUserData = await getUserDataByEmail(email);


    if (!storedUserData) {
      alert("User not found.");
      return;
    }

    if (storedUserData.password === password) {

      console.log("Login successful!");
      //alert("Login successful!");
      
      localStorage.setItem("login", true)
      navigate("/dashboard")

    } else {
      alert("Incorrect password.");
    }
  };


  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-gray-800 flex items-center justify-center">

        <div className='w-[350px] h-[400px] bg-green-400 rounded-md flex flex-col items-center gap-5 p-2 mx-2'>

          <p className='font-bold text-2xl my-3'>Login</p>
          <div className='w-[100%] h-10 flex justify-center items-center gap-3'>
            <label htmlFor="email">Email Id:</label>
            <input required type="text" name='email' id='email' value={email} onChange={emailHandler} className='h-6 rounded-md px-1 text-sm' />
          </div>

          <div className='w-[100%] h-10 flex justify-center items-center gap-3'>
            <label htmlFor="email">Password:</label>
            <input required type="password" name='email' id='email' value={password} onChange={emailPassword} className='h-6 rounded-md px-1' />
          </div>
          <button onClick={handleLogin} className='border border-black rounded-md px-4 py-1 mt-5 font-bold bg-yellow-300'>Login</button>

          <div className='flex w-[100%] items-center justify-end px-5 gap-1'>
            <p className='text-xs items-end'>New User?</p>
            <Link to='/signup' className='text-xs text-blue-800'>SignUp</Link>
          </div>
        </div>


      </div>







    </>
  )
}

export default Login