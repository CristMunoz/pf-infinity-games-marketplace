import React from 'react'
import '../css/styles.css';
import LogoLight from '../img/infinitygames-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" variant='dark' className='bg-nav-footer'>
        <Container>
          <NavLink to='/store'>
            <img src={LogoLight} alt="logo" width="150px" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/store" className='text-start text-cyan mx-3'>
                Tienda
              </NavLink>
              <NavLink to="/favorites" className='text-start text-cyan mx-3'>
                Favoritos
              </NavLink>
              <NavLink to="/publications" className='text-start text-cyan mx-3'>
                Publicaciones
              </NavLink>
              <NavLink to="/my-profile" className='text-start text-cyan mx-3'>
                Mi Perfil
              </NavLink>
              <Link className='text-start text-cyan ms-3'>
                Cerrar Sesión
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
