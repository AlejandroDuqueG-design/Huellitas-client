import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Card, Container } from "react-bootstrap";
import { AuthContext } from "../Context/auth.context";
import service from "../services/config.services";

function LoginPage() {
  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = async (event) => {
    event.preventDefault();

    const userCredentials = {
      email,
      password,
    };
    console.log(userCredentials);
    try {
      const response = await service.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, userCredentials);
      console.log(response);

      localStorage.setItem("authToken", response.data.authToken);

      await authenticateUser();

      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
  <Container className="d-flex justify-content-center align-items-center min-vh-100" >
      <Card className="p-4 shadow-lg" style={{ maxWidth: "450px", width: "100%", borderRadius: "10px", backgroundColor: "#f8f9fa" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h4 style={{ fontWeight: 500 }}>Formulario de Acceso</h4>
          </Card.Title>

          <Form onSubmit={handleLogin}>
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm="4" className="fw-bold">
                Correo
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4" controlId="formPassword">
              <Form.Label column sm="4" className="fw-bold">
                Contraseña
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Col>
            </Form.Group>

            {errorMessage && <p className="text-danger text-center mb-3">{errorMessage}</p>}

            <div className="d-grid gap-2">
              <Button type="submit" size="lg" style={{
              backgroundColor: "#2a8891ff", 
              borderColor: "#2a8891ff", 
              color: "white", 
            }}>
                Enviar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;