import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
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
    console.log(userCredentials)
    try {
      const response = await service.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, userCredentials);
      console.log(response);

      localStorage.setItem("authToken", response.data.authToken)

      await authenticateUser();

      navigate("/")

    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      }   else {
        navigate("/error")
      }
    }
  };

  return (
    <div>
      <h6>Formulario de Acceso</h6>

      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
          </Col>
        </Form.Group>
      <Button variant="light" type="submit" > Enviar </Button>
      </Form>
    </div>
  );
}
export default LoginPage;
