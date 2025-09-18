import { useState } from "react";
import { useNavigate } from "react-router";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button, Container } from "react-bootstrap";
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
    <div>
      <Container className="text-center">
        <h6>Formulario de Registro</h6>

        <Form onSubmit={handleSignup}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nombre
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Nombre Completo" value={name} onChange={handleNameChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Correo Electronico
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Contraseña
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary">
            {" "}
            Registrarse{" "}
          </Button>
          {errorMessage && <p>{errorMessage}</p>}
        </Form>
      </Container>
    </div>
  );
}
export default SignupPage;
