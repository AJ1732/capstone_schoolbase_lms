import React, { createContext, useContext, useState } from 'react'

export const Context = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);

  const value = {
    expand,
    setExpand
  }

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  )
}

export const useValueContext = () => useContext(Context);

