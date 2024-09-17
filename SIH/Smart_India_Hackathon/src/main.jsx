import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from "./assets/Login.jsx";
import './index.css'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
