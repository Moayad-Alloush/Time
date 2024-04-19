import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../../App.css';

export const Header = () => {
      
  return (
    <Navbar className='header'  expand="lg" >
      <Container fluid className='p-0 '>
        <Row className='p-0' >  <img className='logo' src='./images/Pictures/My_Logo.PNG'/>
          </Row>
        <Row className='w-100 m-0 p-0 '> 
          <Col  className='col-8 header'>
            <Navbar.Toggle aria-controls="navbarScroll" className='text-white bg-white position-absolute end-0 mx-5'/>
            <Navbar.Collapse id="navbarScroll" className='text-white'>
              <Nav
                className="me-auto text-white"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
                <Nav.Link className='text-white' as={Link} to="/Products">Products</Nav.Link>
                <Nav.Link className='text-white' as={Link} to="/Shopping">Shopping Cart</Nav.Link>
                <Nav.Link className='text-white' as={Link} to="/Checkout">Checkout</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
      </Container>
    </Navbar>


  );
}