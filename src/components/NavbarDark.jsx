import React from 'react'
import '../css/styles.css';
import LogoLight from '../img/infinitygames-light.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarDark = () => {
  return (
    <>
      <Navbar className='bg-darkpurple' expand="lg" variant='dark'>
        <Container>
          <Link to='/store'>
            <img src={LogoLight} alt="logo" width="150px" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/store" className='text-start text-cyan mx-3'>
                Tienda
              </Link>
              <Link to="/favorites" className='text-start text-cyan mx-3'>
                Favoritos
              </Link>
              <Link to="/publications" className='text-start text-cyan mx-3'>
                Publicaciones
              </Link>
              <Link to="/my-profile" className='text-start text-cyan mx-3'>
                Mi Perfil
              </Link>
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

export default NavbarDark
