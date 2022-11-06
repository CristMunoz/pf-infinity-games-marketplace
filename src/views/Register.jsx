import React from 'react'
import '../css/styles.css';
import Logo from '../img/infinitygames-logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row row-lg">
          <section className="banner">
          <div className="content">
              <Link
                to="/">
                <img src={Logo} alt="logo" className='mt-5 ms-5' />
              </Link>
              <div className="display-content mx-3">
                <h2 className="title text-white text-uppercase">              
                    ¡Ven y <br />únete a <br />nuestra <br />Comunidad!                 
                </h2>
                <div className="container forms mt-5 px-5 py-auto">
                  <form className='bg-login-register p-5'>
                    <h3 className='text-white text-start'>Crear una cuenta</h3>
                    <p className='text-start text-lightpurple'>
                      ¿Ya tienes una cuenta? <Link to="/login" className='text-cyan'>Iniciar sesión</Link>
                    </p>
                    <div className="mb-3">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div class="mb-3">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Contraseña' />
                    </div>
                    <div class="mb-3">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Repetir contraseña' />
                    </div>
                    <button onClick={() => navigate(`/login`)} type="submit" className="btn btn-forms mb-1">Crear una cuenta</button>
                    <hr className='line' />
                    <p className='text-lightpurple'>Al crear una cuenta, confirmo que tengo al menos 18 años y acepto los <Link to="#" className='text-cyan'>Términos y condiciones</Link> y la <Link to="#" className='text-cyan'>Política de privacidad</Link> de Eneba.</p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Register