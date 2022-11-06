import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

const Details = () => {
  

  return (
    <>
      <NavBar />
      <SearchBar />
      <div className="container my-5">
        <div className="row">
          <h2>Detalles de la publicación</h2>
          <div className="card mb-3 mx-auto"  style={{maxWidth:"950px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Mortal Kombat 11</h5>
                  <p className="card-text">$15.000</p>
                  <p className="card-text">Lucha</p>
                  <p className="card-text">Profundiza y personaliza la experiencia como nunca antes con un nuevo Sistema de Variación de Personajes Personalizado que da a los jugadores el control creativo para crear versiones personalizadas de la lista de personajes.</p>
                  <p className="card-text"><small className="text-muted">Publicado el 20/10/2022 por G.V</small></p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Details