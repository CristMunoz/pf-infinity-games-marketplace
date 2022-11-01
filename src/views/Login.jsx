import React from 'react'
import '../css/styles.css';
import Logo from '../img/infinitygames-light.png'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
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
              <div className="display-content mx-auto">
                <h2 className="title text-white text-uppercase">              
                    ¡Bienvenido! <br />¡Nos <br />alegra <br />verte!                 
                </h2>
                <div className="container forms mt-5 px-5 py-5">
                  <form className='bg-purple p-5'>
                    <h3 className='text-white text-start'>Iniciar sesión</h3>
                    <p className='text-start text-lightpurple'>
                      ¿Nuevo usuario? <Link to="/register" className='text-cyan'>Crea una cuenta</Link>
                    </p>
                    <div className="mb-3">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Contraseña' />
                    </div>
                    <button 
                      onClick={() => navigate(`/store`)} 
                      type="submit" 
                      className="btn btn-forms mb-1"
                      >
                        Ingresar
                    </button>
                    <p><Link to="#" className='text-cyan'>¿Has olvidado tu contraseña?</Link></p>
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

export default Login