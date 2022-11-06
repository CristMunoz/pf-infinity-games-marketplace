import React from 'react'
import EditProfile from '../components/EditProfile'
import Footer from '../components/Footer'
import NavbarDark from '../components/NavBar'

const MyProfile = () => {
  return (
    <>
        <NavbarDark />
        <div className="container">
          <div className="row">
            <EditProfile />        
          </div>
        </div>
        <Footer />  
    </>
  )
}

export default MyProfile