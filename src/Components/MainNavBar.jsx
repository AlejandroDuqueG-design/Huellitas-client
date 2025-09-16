import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";

function MainNavBar() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="primary" expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Huellitas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setExpanded((prevState)=> !prevState)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> setExpanded(false)} as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={()=> setExpanded(false)} as={Link} to="/dog">
              Nuestros Peluditos
            </Nav.Link>
            <Nav.Link onClick={()=> setExpanded(false)} as={Link} to="/adoption">
              Adopción
            </Nav.Link>
            <Nav.Link onClick={()=> setExpanded(false)} as={Link} to="/aboutus">
              Sobre Nosotros
            </Nav.Link>
            <NavDropdown title="Area de Usuario" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/my-profile">
                Mi Perfil
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/myadoption-request">
                Mis Solicitudes de Adopción
              </NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/signup">
                Registrarse
              </NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/login">
                Entrar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
