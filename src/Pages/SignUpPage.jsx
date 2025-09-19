import { useState } from "react";
import { useNavigate } from "react-router";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Card, Container } from "react-bootstrap";
import service from "../services/config.services";

function SignupPage() {
  const navigate = useNavigate;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSignup = async (event) => {
    e.prevenDefault();

    const newUser = {
      name,
      email,
      password,
    };

    try {
      const response = await service.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, newUser);
      console.log(response);
      navigate("/login");

      // Cuando el registro no se crea correctamente ya sea por culpa del usuario o por culpa del servidor
    } catch (error) {
      console.log(error); // Se ejecuta para cualquier tipo de error

      // Este set error se recibe cuando hay un error tipo 400, es decir un error que es culpa del ususario
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
<Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%", borderRadius: "10px", backgroundColor: "#f8f9fa" }}>
        <Card.Body>
          <h4 className="text-center mb-4" style={{ fontWeight: 500 }}>Formulario de Registro</h4>

          <Form onSubmit={handleSignup}>
            <Form.Group as={Row} className="mb-3" controlId="formName">
              <Form.Label column sm="4" className="fw-bold">
                Nombre
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Nombre Completo" value={name} onChange={handleNameChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm="4" className="fw-bold">
                Correo
              </Form.Label>
              <Col sm="8">
                <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4" controlId="formPassword">
              <Form.Label column sm="4" className="fw-bold">
                Contraseña
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
              </Col>
            </Form.Group>

            {errorMessage && <p className="text-danger text-center mb-3">{errorMessage}</p>}

            <div className="d-grid gap-2">
              <Button type="submit" size="lg" style={{
              backgroundColor: "#2a8891ff", // tu color personalizado
              borderColor: "#2a8891ff", // opcional: para que borde combine
              color: "white", // color del texto
            }}>
                Registrarse
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignupPage;