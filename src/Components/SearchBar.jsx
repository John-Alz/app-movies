import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function SearchBar() {

  const history = useHistory()

    const handleSubmit = e => {
      e.preventDefault();
      const keyword = e.currentTarget.keyword.value.trim();

      if (keyword.length === 0) {
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: "Debes escribir una palabra valida",
              showConfirmButton: false,
              color: '#fff',
              background: 'rgba(40,40,40,1)',
              timer: 2500
            })
      } else if (keyword.length < 4) {
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: "Debes escribir mas de cuatro caracteres",
              showConfirmButton: false,
              color: '#fff',
              background: 'rgba(40,40,40,1)',
              timer: 2500
            })
      } else {
        e.currentTarget.keyword.value = " "
        history.push(`/resultados?keyword=${keyword}`)
      }

    }

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
    <div className="flex mb-3 xl:w-3/5 ">
    <input
        // onChange={(e) => handleChange(e.target.value)}
        type="text"
        name='keyword'
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-transparent
        border border-solid border-white
        rounded
        transition
        ease-in-out
        mt-4
        focus:text-white  focus:outline-none
        placeholder-white"
        autocomplete="off"
        placeholder="¿Que quieres ver?   "
    />
    
  </div>
  <div className='absolute mt-6 ml-96'>
    <button ><BsSearch size={22} color="white"/></button>
    </div>
    </form>
  )
}
