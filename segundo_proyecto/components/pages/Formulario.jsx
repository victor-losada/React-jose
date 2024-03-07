import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Formulario = (e) => {

    const [nombre, setNombre] = useState("")
  return (
    <div className='p-4 bg-orange-700 text-white'>
         

        <label>
  
            Nombre:
            
            <input value={nombre} onChange={e => setNombre(e.target.value)} />
        </label>
        {nombre !== '' && <p>Tu nombre es {nombre}.</p>}
      
<Link>
<Link to="/">
      <button className="bg-blue-500">volver</button>
      </Link>
</Link>
    </div>
  )
}

export default Formulario
