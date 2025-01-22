import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
// import UserContext from './context/UserContext.jsx'
// import {CaptainProvider }from './context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserContext>
      <CaptainProvider> */}
        <App />
      {/* </CaptainProvider>
    </UserContext> */}
  </StrictMode>
)
