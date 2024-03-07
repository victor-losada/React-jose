import React, { useState } from 'react'

const Estado = () => {
    const [contador,setContador] = useState(0);
    const cliBoton = () => {
        setContador(contador + 1)
    }
  return (
    <div>
      <button className='bg-slate-600 p-2 rounded-md text-white '
       onClick={cliBoton}>Hiciste clic {contador} veces</button>
       
    </div>
  )
}

export default Estado
