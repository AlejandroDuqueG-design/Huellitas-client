import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router";

function MainNavBar() {
  return (
    <Navbar bg="primary" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
          Huellitas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dog">
              Dogs
            </Nav.Link>
            <Nav.Link as={Link} to="/adoption">
              Adoption
            </Nav.Link>
            <NavDropdown title="User Area" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/my-profile">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                My adoption requests
              </NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/signup">
                Sign Up
              </NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/login">
                Log In
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
