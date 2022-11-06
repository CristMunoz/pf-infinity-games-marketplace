import React from 'react'
import ProductImg from '../img/no-image.png';

const CreatePublication = () => {
  return (
    <>
        <div className="col-sm-12 col-lg-6">
            <form class="row g-3 text-white text-start bg-search p-4">
                <h3>Crear publicación</h3>
                <img src={ProductImg} alt="producto" style={{width:"200px", justifyContent:"center"}} />
                <div class="mb-3">
                    <input class="form-control" type="file" id="formFile"/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Nombre del juego</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Precio</label>
                    <input type="text" class="form-control" id="inputPassword4"/>
                </div>
                
                <div className="row">
                    <label for="inputAddress2" class="form-label mt-3">Categorías</label>
                    <div className="col"> 
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Acción
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Aventuras
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Carreras
                            </label>
                        </div>
                    </div>

                    <div className="col"> 
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Deportes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                FPS/TPS
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Lucha
                            </label>
                        </div>
                    </div>

                    <div className="col"> 
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Plataforma
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                RPG
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Simulación
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Estado del juego</label>
                    <select id="inputState" class="form-select">
                        <option selected>Seleccione estado</option>
                        <option>Usado - Como nuevo</option>
                        <option>Usado - Buen estado</option>
                        <option>Usado - Aceptable</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Crear publicación</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default CreatePublication