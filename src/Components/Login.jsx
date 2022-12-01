import React, { useState } from 'react'
import axios from 'axios';
import { Redirect, useHistory} from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import react from "../img/react.png"
import js from "../img/js.png"
import tailwind from "../img/tailwind.png"
import vs from "../img/vs.png"
import Swal from 'sweetalert2'

export default function Login() {
    const [showModal, setShowModal] = React.useState(false);

    const [showpassword, setShowPassword] = useState("password");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       

        if(email === "" || password === ""){
            // swal("Oops",
            //     "Los campos no deben estar vacios", "warning"
            // ) 
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Los campos no deben estar vacios',
              showConfirmButton: false,
              color: '#fff',
              background: 'rgba(0,0,0,0.8)',
              timer: 2500
            })
            return;
        }

        if (email !== "" && !regexEmail.test(email)) {
            // swal("Oops",
            //     "Debes escribir una direccion de correo valida", "warning"
            // ) 
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Debes escribir una direccion de correo valida',
              showConfirmButton: false,
              color: '#fff',
              background: 'rgba(0,0,0,0.8)',
              timer: 2500
            })
            return;
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            // swal("Oops",
            //     "Credenciales inavalidas", "error"
            // ) 
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Credenciales invalidas',
              showConfirmButton: false,
              color: '#fff',
              background: 'rgba(0,0,0,0.8)',
              timer: 2000
            })
            return;
        }


        
            const tokenRecibido = "jnjnhsjadjhs";
            sessionStorage.setItem('token', tokenRecibido);
            history.push("/listado");
    }

    let token = sessionStorage.getItem("token")

  return (
    <>
    {token && <Redirect to="/listado"/>}
    <div className='   bg-white/10 px-10 py-10  rounded-3xl '>
    <h1 className='text-5xl text-white font-semibold'>Welcome back!</h1>
    <p className='font-medium text-lg text-white mt-4'>Welcome back! please enter your details.</p>
    <form
    className='mt-8'
     onSubmit={handleSubmit}>
        <div>
        <label className='text-lg text-white font-medium'>Email</label>
            <input 
            className='w-full border-2 text-white border-gray-100 roundes-xl p-4 mt-1 bg-transparent focus:outline-none focus:text-white placeholder-white'
            placeholder='Enter your email'
            type="text" 
            name='email' />
        </div>
        <div>
        <label className='text-lg text-white font-medium'>Password</label>
            <input 
            className='w-full border-2 text-white border-gray-100 roundes-xl p-4 mt-1 bg-transparent focus:outline-none focus:text-white placeholder-white'
            placeholder='Enter your password'
            type={showpassword}
            name='password' />
        </div>
        <div className='mt-8 flex justify-between items-center'>
            <div>
                <input 
                type="checkbox"
                id='remember'
                // type={showpassword}
                onClick={() => {
                    showpassword === "password"
                        ? setShowPassword("text")
                        : setShowPassword("password");
                }}
                />
                <label 
                htmlFor='remember'
                className='ml-2 text-white font-medium text-base'>
                    Show password.
                </label>
            </div>
                <button className='font-medium text-base text-violet-500'>Forgot password.</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
        <button className=' active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-500 text-white text-lg font-bold py-3 rounded-xl' type='submit'>Sing in</button>
        <div onClick={() => setShowModal(true)} className='flex border-2 border-gray-100 py-3 rounded-xl items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-white'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
            Obten tus credenciales
            </div>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="absolute right-3 mt-3">
									<button
										className=" rounded-full"
										onClick={() => setShowModal(false)}
									>
										<AiOutlineCloseCircle size={30} color="white" />
									</button>
								</div>
                {/*body*/}
                <div className="relative p-6 flex-auto ml-10 mr-10 mt-4">
                  <h1 className="my-4 text-white text-5xl font-bold">
                    {/* NextJs Startet Boilerplate */}
                    Credenciales validas,ingresa
                  </h1>
                  <p className="my-4 text-white text-2xl text-center">
                    {/* Prodcution-ready with SEO-friendly for <br />
                    quickly starting a new project */}
                    Email: challenge@alkemy.org <br />
                    Contraseña: react
                  </p>
                  <div className="grid grid-cols-4 gap-4 mt-8 mb-8">
                    <img className="w-40 " src={react} alt="react" />
                    <img className="w-16 ml-10" src={js} alt="javascript" />
                  <img className="w-40 mt-4" src={tailwind} alt="tailwindcss" />
                  <img className="w-32 ml-10" src={vs} alt="vsCode" />
                  </div>
                  <p className="my-4 text-white font-bold text-center">
                    By John Angel FrontEnd Developer.
                  </p>
                </div>
                
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    </form>
    </div>
    </>
  )
}