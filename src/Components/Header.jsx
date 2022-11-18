import React from 'react'
import Navbar from './Navbar'

export default function Header(favorites) {
  return (
    <div className='absolute z-50 w-full'>
        <Navbar favorites={favorites}/>
    </div>
  )
}
