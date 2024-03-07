import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../components/pages/Home'
import Formulario from '../components/pages/Formulario'
import CardPrifle from '../components/CardPrifle'
import Estado from '../components/Estado'
import MiBoton from '../components/MiBoton'
import Profile from '../components/Profile'

const App = () => {
  return (
    <div>
{/*     
     <CardPrifle/>
    <Estado/>
    <MiBoton/>
    <Profile/> 
   */}

    <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/formulario' element={<Formulario/>}></Route>
    </Routes>      
    </div>
  )
}

export default App
