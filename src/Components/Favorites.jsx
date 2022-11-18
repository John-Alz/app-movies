import React from 'react'
import { Redirect } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Favorites(props) {


  let token = sessionStorage.getItem("token")

  return (
    <div>
      {!token && <Redirect to="/"/>}
      <Navbar/>
      <div className='text-4xl text-white font-bold pt-12 pl-16'>
      <h1>Favoritos:</h1>
    </div>
    {!props.favorites.length && <div className='text-4xl font-bold pt-12 ml-16 mt-20 flex'><h1 className='top-2 text-white'>No tienes favoritos :( </h1></div>}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pl-15 pr-16 pl-16 pt-8 pb-32'>
      {
        props.favorites.map((oneMovie, idx) => {
            return(
              <div>
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
      <Footer/>
    </div>
  )
}
