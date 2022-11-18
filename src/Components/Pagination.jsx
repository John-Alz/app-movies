import React from 'react'
import { FcPrevious, FcNext} from 'react-icons/fc';

export default function Pagination({ setPageNumber, pageNumber }) {

    let next = () => {
        setPageNumber((pageNumber) + 1);
    };


    let prev = () => {
        setPageNumber((pageNumber) - 1);
    };

  return (
    <div className='ml-20'>
        <div className='ml-96 mb-20 mt-10'>
            <button onClick={prev} disabled={pageNumber === 1 || pageNumber < 1} className=' text-white font-bold rounded ml-56'><FcPrevious size={30} color='white'/></button>
            <span className='mx-8 text-2xl font-bold'>{pageNumber}</span>
            <a href="#new"><button onClick={next} className=' text-white font-bold rounded'><FcNext size={30} color="white"/></button></a>
        </div>
    </div>
  )
}
