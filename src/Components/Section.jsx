import React from 'react'
import mike from "../img/mike3.png"


export default function Section() {
  return (
    <div className=''>
    <div className=' flex mt-10'>
          <div className='ml-20 mt-56 absolute'>
            <h1 className=' text-white text-7xl font-semibold'>Toma la <span className='text-purple-500'>siguiente</span>   <br />  experiencia a <br /> otro <span className='text-purple-500'>nivel</span></h1>
            <a href="#new"><button className=' mt-20 flex border-2 border-violet-500 hover:bg-gradient-to-r from-violet-600 to-purple-700 pr-4 text-white text-2xl font-bold py-2 px-4'>Get Stated</button></a>
            </div>
            <div className='ml-96 '>
            <div className='ml-64 '>
              <img src={mike} alt="mike" />
            </div> 
            </div>
    </div>
    </div>
  )
}
