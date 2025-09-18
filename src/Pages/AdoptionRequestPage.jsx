import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import service from "../services/config.services";

function AdoptionRequestPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [dogDetails, setDogDetails] = useState({});
  const [user, setUser] = useState({});
  const [requestDate, setRequestDate] = useState("");
  const [comments, setComments] = useState("");

  // Cargar los datos del perro al entrar en la página
  useEffect(() => {
    const getDog = async () => {
      try {
        const response = await service.get(`/dog/${params.dogId}`);
        setDogDetails(response.data);
      } catch (error) {
        console.log("Error subiendo los datos del perro:", error);
      }
    };
    getDog();
  }, [params.dogId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newAdoptionRequest = {
      dog: dogDetails._id,
      user: user._id,
      requestDate,
      comments,
      adoptionRequestState: "Pendiente",
      resolutionDate: null,
    };

    console.log("Datos de la nueva solicitud:", newAdoptionRequest);

    try {
      const response = await service.post("/adoption", newAdoptionRequest);
      console.log("Solicitud creada correctamente:", response);
      navigate("/myadoption-request");
    } catch (error) {
      console.log("Error creando solicitud:", error.response?.data || error);
    }
  };

  return (
    <Container className="text-center mt-5">
      <h4>Adoptar a:</h4>
      <Card className="p-4 mt-3">
        <Card.Title className="mb-2">
        <p>{dogDetails.name}, {dogDetails.age} años</p>
        <p></p>
        
        </Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de solicitud</Form.Label>
            <Form.Control
              type="date"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control
              type="text"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Comentarios opcionales"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Enviar solicitud
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AdoptionRequestPage;