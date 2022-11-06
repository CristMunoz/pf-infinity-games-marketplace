import React from 'react'
import CreatePublication from '../components/CreatePublication'
import Footer from '../components/Footer'
import NavbarDark from '../components/NavBar'

const Publications = () => {
  return (
    <>
      <NavbarDark />
      <div className="container">
        <div className="row  my-5">
          <CreatePublication />
        </div>
      </div> 
      <Footer />
    </>
  )
}

export default Publications