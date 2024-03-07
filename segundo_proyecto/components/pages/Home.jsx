import React from "react";
import { Link } from "react-router-dom";


function Home(){
  return(
    <>
      <h1 className="" >Home</h1>
      <Link to="/formulario">
      <button className=" bg-blue-500 text-white py-2 px-2"> Boton ir</button>
      </Link>

      </>
  )
}

export default Home






