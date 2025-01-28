import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

const Header = () => {
    const navigate = useNavigate()
 
    const handleLogout=()=>{
        window.localStorage.clear("taskToken")
        navigate("/")
    }
    
  return (
    <div>
 <Navbar expand="lg" className="bg-dark-tertiary" id='nav'>
      <Container fluid>
        <Navbar.Brand href="#" id='header'>Product Management System</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home"></Nav.Link>
            <Nav.Link as={Link} to="addproduct"></Nav.Link>
            <Nav.Link as={Link} to="display"></Nav.Link>
            <Nav.Link as={Link} to="search"></Nav.Link>
          </Nav>
          <Form className="d-flex">
 
            <Button id='logout' onClick={handleLogout}>Logout
            <CiLogout />
            </Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default Header