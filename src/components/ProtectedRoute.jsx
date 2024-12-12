/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const status=localStorage.getItem('login');

  return (status==="true")?<Outlet/>:<Navigate to="login"/>
 
}

export default ProtectedRoute