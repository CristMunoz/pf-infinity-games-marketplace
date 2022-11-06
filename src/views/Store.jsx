import React from 'react'
import NavbarDark from '../components/NavBar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import GameCard from '../components/GameCard'

const Store = () => {
  return (
    <>
      <NavbarDark />       
      <SearchBar />
      <div className="container my-5">
        <div className="row">  
          <GameCard />
        </div>
      </div>   
      <Footer />
    </>
  )
}

export default Store