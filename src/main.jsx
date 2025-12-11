import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'        // global CSS
import App from './App.jsx' // main App component

// Mount React app into root div
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)

