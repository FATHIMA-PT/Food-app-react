import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand href="#home" className='fw-bolder fs-4 text-dark'>
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
      <i className="fa-solid fa-bowl-food fa-beat" style={{color:'black'}}></i>{' '}
        Food Store
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header
