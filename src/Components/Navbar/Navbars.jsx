import React from 'react'
import './Navbars.css';
import logo from '../../Assets/logo.png'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbars() {
  return <>
  
  <header >
  <Navbar expand="lg" className="bg-body-tertiary fixed-top py-3">
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><i className="fa-solid fa-bars"></i></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
          

            <Link  className='navbar' to="/">Home</Link>
        
          
            <NavDropdown title="Pages" id="basic-nav-dropdown">  
            <div className='d-flex flex-column'>

              <Link to="/about">About Us</Link>
              <Link to="/ourteam">Our Team</Link>
              <Link to="/faq">FAQ's</Link>
              <Link to="/booking">Booking</Link>
              <Link to="/pagenotfound">Error 404</Link>
              <Link to="/Login">Login / Register</Link>
            </div>
            </NavDropdown>


            <NavDropdown title="Services" id="basic-nav-dropdown">
            <div className='d-flex flex-column'>
              <Link to="/services">Service</Link>
              <Link to="/services">Service Detail</Link>
              </div>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown">
            <div className='d-flex flex-column'>
              <Link to="/blog">Blogs</Link>
              <Link to="/blog">Blogs Detail</Link>
              </div>
            </NavDropdown>

        <Link to='/contact'>Contact Us</Link>
          

            <Nav.Link href="#home" className='mx-4 searchIcon'><i className="fa-solid fa-magnifying-glass"></i></Nav.Link>
          
          <button className='btn py-2'>
          <Link to="/contact"> 
              CONTACT US
              <span className='ms-2 rounded px-3 py-2'>
              <i className="fa-solid fa-chevron-right fs-sm"></i>
              </span>
              </Link>
              
              </button>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  
  
  
  </>
  
}
