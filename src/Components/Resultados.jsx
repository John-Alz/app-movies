import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Pagination from './Pagination';
import Swal from 'sweetalert2'

export default function Resultados(props) {

    const [moviesResults, setMoviesResults] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get("keyword")

    //https://api.themoviedb.org/3/search/movie?api_key=155ac120887e5a211953b1e9e999319f&language=en-US&page=1&include_adult=false&query=spiderman

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=155ac120887e5a211953b1e9e999319f&language=en-US&page=${pageNumber}&include_adult=false&query=${keyword}`;
        axios.get(endPoint).then(response => {
                const moviesArray = response.data.results;
                if (moviesArray.length === 0) {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Tu busqueda no arrojo resultados',
                  showConfirmButton: false,
                  color: '#fff',
                  background: 'rgba(40,40,40,1)',
                  timer: 2000
                })
                }
                setMoviesResults(moviesArray);
                console.log(moviesArray);
            })
            .catch(error => {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'No se pudo cargar la API',
                  showConfirmButton: false,
                  color: '#fff',
                  background: 'rgba(40,40,40,1)',
                  timer: 2000
                })
            })
    }, [keyword, pageNumber]);

    let token = sessionStorage.getItem("token")
  

  return (
    <div>
        {!token && <Redirect to="/"/>}
        <Navbar/>
        <div className='text-4xl text-white font-bold pt-12 pl-16' id='new'>
      <h1>Resultados de: "{keyword}"</h1>
    </div>
        { moviesResults.length === 0 && <h2 className='text-4xl text-white font-bold pt-12 ml-16 mt-20 flex'>Ho hay Resultados.</h2>}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pl-15 pr-16 pl-16 pt-8 pb-10'>
      {
        moviesResults.map((oneMovie, idx) => {
            return(
              <div>
                <div key={idx}>
                  <Card movie={oneMovie} addOrRemoveFovorite={props.addOrRemoveFovorite}/>
                </div>
              </div>
            )
        })
      }
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <Footer/>
    </div>
  )
}
