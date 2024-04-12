import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './context/ContextProvider.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ContextProvider>
  </React.StrictMode>,
)
