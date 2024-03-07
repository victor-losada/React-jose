import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='nosotros' element={<Nosotros/>}></Route>
      <Route path='contactenos' element={<Contacto/>}></Route>
    </Routes>
    
    
    </>
  )
}

export default App
