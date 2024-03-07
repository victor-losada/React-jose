import React from 'react'
import Profile from './components/Profile'
import CardProfile from './components/CardProfile'
import MiBoton from './components/MiBoton'
import Estado from './components/Estado'

const App = () => {
  return (
    <div>
        <h1 className='text-center underline font-bold text-3x1 bg-slate-400'>Hola Mundo</h1>
      <Profile/>
      <CardProfile/>
      <MiBoton/>
      <Estado/>

    
    </div>
  )
}

export default App
