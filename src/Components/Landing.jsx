import React from 'react'
import Login from './Login'

export default function Landing() {
  return (
    <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <Login/>
          </div>
          <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-[url('http://promar.tv/wp-content/uploads/2020/07/JD-Jul-C%C3%B3mo-tener-Netflix-en-Venezuela-pagando-en-bol%C3%ADvares.jpg')]">
            {/* <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" /> */}
            {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " /> */}
          </div>
        </div>
  )
}
