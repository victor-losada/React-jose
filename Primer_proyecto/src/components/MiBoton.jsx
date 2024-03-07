import React from 'react'

const MiBoton = () => {
    function eventoBton() {
        alert('!Me hiciste click!')
    }

  return (
    <div>
      <div className='text-center bg-red-600 p-3'></div>
      <button className='bg-slate-600 p-2 rounded-md text-white'
      onClick={eventoBton}>Hazme click</button>
    </div>
  )
}

export default MiBoton
