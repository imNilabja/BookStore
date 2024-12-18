/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, getDocs, collection, addDoc, query, where } from "firebase/firestore";
import app from '../../Backend/firestore';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const db = getFirestore(app);

const Signup = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate=useNavigate();
    const emailHandler = (e) => {
        setemail(e.target.value)
        console.log(email)
    }

    const emailPassword = (e) => {
        setpassword(e.target.value)
        console.log(password)
    }
    
    const userExistCheck = async (email) => {
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


    const handleAdd = async () => {
        try {
            if (!email || !password) {
                alert("Fill all the fields")
                return;
            }

            const user = await userExistCheck(email);

            if (user) {
                alert("user already exist")

            } else {
                const id = uuidv4();
                const newForm = { id, email, password };

                const docRef = await addDoc(collection(db, "Signup"), newForm);
                alert("Signed up")
                navigate("/login")

                console.log("Document written with ID: ", docRef.id);
            }



        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
  

    return (
        <>
            <Navbar />
            <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
                <div className='w-[350px] h-[400px] bg-green-400 rounded-md flex flex-col items-center gap-5 p-2 mx-3'>

                    <p className='font-bold text-2xl my-3'>Sign Up</p>
                    <div className='w-[100%] h-10 flex justify-center items-center gap-3'>
                        <label htmlFor="email">Email Id:</label>
                        <input required type="text" name='email' id='email' value={email} onChange={emailHandler} className='h-6 rounded-md px-1 text-sm' />
                    </div>

                    <div className='w-[100%] h-10 flex justify-center items-center gap-3'>
                        <label htmlFor="email">Password:</label>
                        <input required type="password" name='email' id='email' value={password} onChange={emailPassword} className='h-6 rounded-md px-1' />
                    </div>
                    <button onClick={handleAdd} className='border border-black rounded-md px-4 py-1 mt-5 font-bold bg-yellow-300'>Sign up</button>
                    <div className='flex w-[100%] items-center justify-end px-5 gap-1'>
                        <p className='text-xs items-end'>Already user?</p>
                        <Link to='/login' className='text-xs text-blue-800'><a href="#">Login</a></Link>
                    </div>

                </div>



            </div>







        </>
    )
}

export default Signup