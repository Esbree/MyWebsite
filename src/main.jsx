import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/main.css'

// Instagram Embed Script laden
const script = document.createElement('script')
script.src = 'https://www.instagram.com/embed.js'
script.async = true
document.body.appendChild(script)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)