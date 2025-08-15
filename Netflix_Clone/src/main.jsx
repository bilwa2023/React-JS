import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Netflix_index } from './components/netflix/netflix-index.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Netflix_index />
  </StrictMode>,
)
