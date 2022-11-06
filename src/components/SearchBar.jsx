import React from 'react'
import '../css/styles.css';

const SearchBar = () => {
  return (
    <div>
        <div className="navbar navbar-expand-lg bg-search">
            <div className="container ">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-cyan" type="submit">
                        <ion-icon name="search" className=""></ion-icon>
                    </button>
                </form>

                <form className='selects m-2'>
                    <select class="form-select " aria-label="Default select example">
                        <option selected disabled>Seleccione Categoría</option>
                        <option value="1">Acción</option>
                        <option value="2">Aventuras</option>
                        <option value="3">Carreras</option>
                        <option value="4">Deporte</option>
                        <option value="5">FPS/TPS</option>
                        <option value="6">Lucha</option>
                        <option value="7">Plataforma</option>
                        <option value="8">RPG</option>
                        <option value="9">Simulación</option>                   
                    </select>

                    <select class="form-select " aria-label="Default select example">
                        <option selected disabled>Seleccione Consola</option>
                        <option value="1">Nintendo Switch</option>
                        <option value="2">PlayStation 4</option>
                        <option value="3">Xbox One</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SearchBar