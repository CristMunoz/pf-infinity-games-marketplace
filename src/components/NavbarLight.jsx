import React from 'react'
import '../css/styles.css';
import LogoLight from '../img/infinitygames-dark.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarLight = () => {
  return (
    <>
      <Navbar className='bg-cyan' expand="lg" variant='light'>
        <Container>
          <Nav.Link to='/store'>
            <img src={LogoLight} alt="logo" width="150px" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='text-start text-darkpurple'>
                Tienda
              </Nav.Link>
              <Nav.Link className='text-start text-darkpurple'>
                Favoritos
              </Nav.Link>
              <Nav.Link className='text-start text-darkpurple'>
                Publicaciones
              </Nav.Link>
              <Nav.Link className='text-start text-darkpurple'>
                Mi Perfil
              </Nav.Link>
              <Nav.Link className='text-start text-darkpurple'>
                Cerrar Sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarLight