import React from 'react'
import Footer from '../components/Footer'
import GameCard from '../components/GameCard'
import NavbarDark from '../components/NavBar'

const Favorites = () => {
  return (
    <>
      <NavbarDark />
      <div className="container">
        <div className="row">
          <GameCard />          
        </div>           
      </div>
      <Footer />
    </>
  )
}

export default Favorites