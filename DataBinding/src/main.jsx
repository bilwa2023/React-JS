import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataBinding } from './components/DataBinding.jsx'
import { UseState } from './components/UseStateBinding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseState />
  </StrictMode>,
)
