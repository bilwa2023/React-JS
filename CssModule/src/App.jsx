import { useState } from 'react'
import Heading from './components/Heading'
import MenuItems from './components/Items'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  const items=["dal","chawal","roti","salad","paneer","dalma","potal tarkari"]

  return (
    <div className='container'>
      <Heading />
      
      <MenuItems menuItem={items}/>
    </div>
  )
}

export default App
