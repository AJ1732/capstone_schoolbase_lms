import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthProvider'


const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  
  if (!user) {
    alert('Log in to SchoolBase LMS')
    return <Navigate to={`/`} />
  }

  return children
}

export default ProtectedRoute