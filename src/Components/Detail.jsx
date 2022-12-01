import React, { useEffect, useState } from "react";
import {Redirect, useParams } from "react-router-dom";
import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdOutlineFavorite } from 'react-icons/md';
import Header from "./Header";


function Detalle() {
 
    let { id } = useParams();

    console.log(id);

    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=155ac120887e5a211953b1e9e999319f&language=es-ES`;
        axios.get(endPoint).then(response => {
                const movieData = response.data;
                setMovie(movieData);
            })
            .catch(error => {
                swAlert(<h2>No se pudo cargar la API</h2>);
            })
    }, [id]);

    let token = sessionStorage.getItem("token")

    return (
        <>
        {!token && <Redirect to="/"/>}
            { movie && (
                <>  
                <div className='bg-gray-700 bg-opacity-60 absolute z-10 w-full h-screen'></div>
                <div className="bg-no-repeat bg-cover h-screen w-full"style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")` 
                }}  >  
                <div className=" ">
                    <Header/>
                </div>
                     
                    <div  className="flex mt-36 absolute z-50  ml-16">
                        <div className="justify-start w-8/12 ">
                            
                        <h2 className="pt-20 pl-20  text-white text-5xl font-bold">{ movie.title }</h2>
                        <div className="flex  pl-20 ">
                        <span className="inline-block  text-sm font-semibold text-white border-r-2 border-violet-800 pr-2 mb-2 mt-4">{movie.release_date}</span>
                        <ul >
                            { movie.genres.map(oneGenre => <li className="inline-block rounded-full text-sm font-semibold pl-2 text-white mr-2 mb-2 mt-4" key={oneGenre.id}>{oneGenre.name}</li>)}
                        </ul>
                        </div>
                        <p className="pl-20 mt-4 text-white text-sm  ">{ movie.overview}</p>
                        <div className='flex pt-8 pl-20 '>
                        <button className="flex mb-10 pr-4 border-2 border-violet-600 hover:bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold py-2 px-4 rounded">
                        <BsFillPlayFill size={25}/>
                        Play
                        </button>
                        <button className="ml-8 mb-10 flex border-2 border-violet-600 pr-4 hover:bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold py-2 px-4 rounded">
                        <MdOutlineFavorite size={25}/>
                        Add fav
                        </button>
                        </div>
                        </div>
                        <div className="mr-20  "  > 
                        {/* <div className='absolute z-40 bg-gray-900 bg-opacity-50 h-56 w-80 mr-20 mt-32 ml-48 rounded-lg'></div> */}
                        <button type="button" class="absolute z-50 mt-48 ml-48 text-blue-700 border border-violet-500 bg-violet-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center inline-flex items-center ">
                        <BsFillPlayFill size={30} color={"white"}/>
</button>
                        
                        <img className="h-64 w-48 absolute z-40 mt-24 ml-32 rounded-lg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  alt="movie poster" />
                        
                        </div>
                    </div>
                    
                    </div> 
                    fo
                </>    
            )}
            
        </>
    )
}

export default Detalle;