import './Header.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (

  <div className="Header">
   
   <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bañares</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/home">Home</Link> &nbsp;
           <Link to="/car">Car</Link> &nbsp;
           <Link to="/contactUs">Contact Us</Link> &nbsp;
          </Nav>
        </Container>
      </Navbar>
  
      
    
    </>

  </div>


  )
}

export default Header;