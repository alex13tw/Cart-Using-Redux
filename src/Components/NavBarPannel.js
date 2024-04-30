import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBarPannel = () => {
const cartProduct = useSelector(state=>state.cart)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">   
      <Container>   
        <Navbar.Brand href="#home">Redux Toolkit</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />       
          <Nav.Link to="/" as={Link} >Products</Nav.Link>     
          <Navbar.Toggle/>  
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>   
            <Nav.Link to="/cart" as={Link} >My Bag {cartProduct.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>   
      </Container>
    </Navbar>
  )
}

export default NavBarPannel
