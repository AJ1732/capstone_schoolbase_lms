import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from "../fireBase"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth"

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState('');
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      // console.log(currentUser.uid);
      // console.log(user);
    })
    return () => {
      unsubscribe();
    }
  }, [user]);

  // Auth Functions
  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  const logOut = () => signOut(auth);
  
  // Auth Context Value
  const contextValue = {
    user,
    createUser,
    signIn,
    logOut,
  }

  // Auth Context Provider
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);
