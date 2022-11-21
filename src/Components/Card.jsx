import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Card({movie, addOrRemoveFovorite}) {

    const { title, poster_path, release_date, id, imgURL, date} = movie;

    
    
    // const addOrRemoveFovorite = (e) => {

    //   const favMovies = localStorage.getItem('favs')

    // let moviesInFavs;

    // if (favMovies === null) {
    //   moviesInFavs = [];
    // } else {
    //   moviesInFavs = JSON.parse(favMovies)
    // }

    // console.log(moviesInFavs);

    //   const btn = e.currentTarget;
    //   const parent = btn.parentElement;
    //   const padre = parent.parentElement;
    //   const imgURL = padre.querySelector("img").getAttribute("src");
    //   const title = padre.querySelector("h1").innerText;
    //   const date = padre.querySelector("span").innerText;
    //   const movieData = {
    //     imgURL, title, date,
    //     id: btn.dataset.movieId
    //   }

    //   let moviesIsInArray = moviesInFavs.find(oneMovie => {
    //     return oneMovie.id === movieData.id;
    //   })

    //   if (!moviesIsInArray) {
    //     moviesInFavs.push(movieData)
    //     localStorage.setItem('favs', JSON.stringify(moviesInFavs))
    //     console.log("Se agrego la pelicula");
    //   } else {
    //     let movieLeft = moviesInFavs.filter(oneMovie => {
    //       return oneMovie.id !== movieData.id;
    //     })
    //     localStorage.setItem('favs', JSON.stringify(movieLeft))
    //     console.log("Se elimino la pelicula");
    //   }
      
    // }

  return (
    <div>
        <div className="pl-2 pr-2 ">
    <Link to={`/detail/${id}`}>
  <img className=" h-72" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : imgURL } alt="movie"/>
  </Link>
  <div className="">
    <h1 className="font-bold text-xl mb-2">{title.substring(0, 16)}...</h1>
  </div>
  <div className="flex">
    <span className="inline-block  rounded-full text-sm font-semibold text-white mr-2 mb-2">{release_date ? release_date : date}</span>
    <button onClick={addOrRemoveFovorite} data-movie-id={id} className="inline-block   mr-2 mb-2 ml-20"><AiFillHeart size={20} color="white"/></button>
  </div>
</div>

    </div>
  )
}
