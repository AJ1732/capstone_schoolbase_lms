import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthProvider'


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  
  if (!user) {
    alert('Log in to SchoolBase LMS')
    return <Navigate to={`/`} />
  }

  return children
}

export default ProtectedRoute