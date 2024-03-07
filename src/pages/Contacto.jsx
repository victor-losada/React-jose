import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contacto = () => {
  return (
    <div>
      <nav className='bg-blue-500 p-4'>
        <ul className='flex space-x-4 text-white'>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
                <Link to="/contactenos">Contactenos</Link>
            </li>
        </ul>
      </nav>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Contacto
