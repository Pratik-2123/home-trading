import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Product from './Components/Product'
import Help from './Components/Help'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Product />
      <Help/>
      <Contact/>
    </>
  )
}

export default App
