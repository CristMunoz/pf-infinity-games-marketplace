import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditProfile = () => {
    class App extends Component {
        state = {
            date: new Date()
        }
    }

  return (
    <>
        <div className="col-sm-12 col-lg-4">
            <form class="row g-3 text-white text-start bg-search my-5 p-5">
                <h3>Editar mi perfil</h3>
                <img src="" alt="" />
                <div class="col-md-12">
                    <label for="inputNombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-12">
                    <label for="inputApellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="inputPassword4"/>
                </div>
                <label for="inputNacimiento" class="form-label">Fecha de Nacimiento</label>
                <div class="col-md-4">  
                    <DatePicker />
                </div>

                <div class="col-md-4">
                    <select id="inputNacimiento" class="form-select">
                        <option selected>Seleccione mes</option>
                        <option>...</option>
                    </select>
                </div>

                <div class="col-md-4">
                    <select id="inputNacimiento" class="form-select">
                        <option selected>Seleccione año</option>
                        <option>...</option>
                    </select>
                </div>
                
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Guardar cambiosnpm</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default EditProfile