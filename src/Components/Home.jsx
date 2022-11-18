import React from 'react'
import Footer from './Footer'
import Header from './Navbar'
import MovieList from './MovieList'
import Section from './Section'

export default function Home(props) {
  return (
    <div>
        <Header favorites={props.favorites}/>
        <Section/>
        <MovieList addOrRemoveFovorite={props.addOrRemoveFovorite} pageNumber={props.pageNumber} setPageNumber={props.setPageNumber}/>
        <Footer/>
    </div>
  )
}
