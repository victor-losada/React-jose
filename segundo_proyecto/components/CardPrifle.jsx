import React from 'react'
const person = {
    nombre:'Alexandra ',
    apellido:'Dandario',
    imageUrl: 'https://es.web.img3.acsta.net/r_1280_720/pictures/17/05/16/09/48/562882.jpg',
    dim: 90,
    telefono: 3107373705
};

const CardPrifle = () => {
  return (
    <div className='text-center bg-lime-700'> 
      <h1 className='text-3x1 font-bold underline'>{person.nombre} {person.apellido}</h1>
      <img className='rounded-full mx-auto' src={person.imageUrl} width={person.dim} height={person.dim} />
      
    </div>
  )
}

export default CardPrifle
