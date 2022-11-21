import React from 'react'
import { BsSearch } from 'react-icons/bs';
import swal from '@sweetalert/with-react'
import { useHistory } from 'react-router-dom';


export default function SearchBar() {

  const history = useHistory()

    const handleSubmit = e => {
      e.preventDefault();
      const keyword = e.currentTarget.keyword.value.trim();

      if (keyword.length === 0) {
        swal("Oops",
                "Debes escribir una palabra valida", "warning"
            ) 
      } else if (keyword.length < 4) {
        swal("Oops",
                "Debes escribir mas de cuatro caracteres", "warning"
            ) 
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
