import React from 'react'
import '../css/styles.css';
import Logo from '../img/infinitygames-light.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container-fluid">       
          <div className="row row-lg">
            <section className="banner">
              <div className="home-content">
                <img src={Logo} alt="logo" />
                <h1 className="text-white mt-2">Marketplace de videojuegos</h1>
                <div className="home-buttons mt-4">
                  <Link
                    to="/register" 
                    className="btn btn-outline-magenta"
                  >
                      Registrarse
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-outline-cyan"                   
                  >
                    Iniciar Sesión
                  </Link>
                </div>    
              </div>
            </section>
          </div>       
      </div>
    </>
  )
}

export default Home