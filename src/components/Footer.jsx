import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='bg-nav-footer py-2'>
        <p className='my-2 '>© Infinity Games 2022 | Todos los derechos reservados</p>
        <div className="social-media">
          <p className='my-2 '>Síguenos en:</p>
          <div className="icons pt-2">
            <Link to="#" className='text-cyan'><ion-icon name="logo-google"></ion-icon></Link>
            <Link to="#" className='text-cyan'><ion-icon name="logo-apple"></ion-icon></Link>
            <Link to="#" className='text-cyan'><ion-icon name="logo-facebook"></ion-icon></Link>
            <Link to="#" className='text-cyan'><ion-icon name="logo-twitter"></ion-icon></Link>
            <Link to="#" className='text-cyan'><ion-icon name="logo-discord"></ion-icon></Link> 
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer