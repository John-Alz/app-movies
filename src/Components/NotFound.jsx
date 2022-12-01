import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
    <div className=''>
        <h1 className='text-center mt-20 font-bold text-9xl text-purple-800'>404</h1>
        <h2 className='text-center mt-20 font-bold text-3xl text-purple-600'> ¡Oh! La página no se puede encontrar...</h2>
        <h3 className='text-center mt-10 font-bold text-2xl text-purple-400'>El enlace puede ser incorrecto...</h3>
        <h4 className='text-center mt-2 font-bold text-2xl text-purple-400'>o la pagina fue borrada</h4>
        <div className='ml-24'>
        <div className=' ml-64 mt-20'>
        <Link to='/listado'><button className='	ml-96 bg-purple-800 text-white font-bold py-2 px-4 '>Regresa</button> </Link>
        </div>
        </div>
        
          
      </div>
  </div>
  )
}
