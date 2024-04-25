import React, { createContext, useContext, useReducer, useState } from 'react'
import { userReducer } from '../utils/reducer'
export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [ expand, setExpand ] = useState(false);
  const [ state, dispatch ] = useReducer(userReducer, { users: [] })

  const value = {
    expand,
    setExpand,
    state,
    dispatch
  }

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

// CUSTOM CONTEXT HOOK
export const useValueContext = () => useContext(Context);

