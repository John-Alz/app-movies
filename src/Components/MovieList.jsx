import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import Swal from 'sweetalert2'
import Pagination from './Pagination';
// import Categories from './Categories';

export default function Listado(props) {

  const [movies, setMovies] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  console.log(pageNumber);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=155ac120887e5a211953b1e9e999319f&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;
    axios.get(endPoint)
    .then(response => {
      const apiData = response.data;
      setMovies(apiData.results);
    })
    .catch(error => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Tuvimos problemas con el servidor, intenta mas tarde',
              showConfirmButton: false,
              color: '#fff',
              background: 'rgba(40,40,40,1)',
              timer: 2000
            })
    })
  }, [setMovies, pageNumber])

  console.log(movies);

  
    let token = sessionStorage.getItem("token")


  return (
    <>
    {/* <Categories/> */}
    <div className='text-4xl text-white font-bold  pl-16 ' id='new'>
      <h1>Peliculas:</h1>
      
    </div>
      {!token && <Redirect to="/"/>}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pl-15 pr-16 pl-16 pt-8 pb-10'>
      {
        movies.map((oneMovie, idx) => {
            return(
              <div >
                <div key={idx}>
                  {/* <Link to={`/detail/${oneMovie.id}`}> */}
                  <Card movie={oneMovie} addOrRemoveFovorite={props.addOrRemoveFovorite}/>
                  {/* </Link> */}
                </div>
              </div>
            )
        })
      }
      
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </>
  )
}


