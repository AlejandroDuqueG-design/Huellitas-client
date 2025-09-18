import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import service from "../services/config.services";
import { Button, Card, Container, Form, Spinner } from "react-bootstrap";

function EditAdoptionRequestPage() {
  const [dog, setDog] = useState("");
  const [user, setUser] = useState("");
  const [adoptionRequestState, setAdoptionRequestState] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [resolutionDate, setResolutionDate] = useState("");
  const [comments, setComments] = useState("");
 

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/adoption/${params.adoptionId}`);

      setDog(response.data.dog);
      setUser(response.data.user);
      setAdoptionRequestState(response.data.adoptionRequestState);
      setRequestDate(response.data.requestDate);
      setResolutionDate(response.data.resolutionDate);
      setComments(response.data.comments);

    } catch (error) {
      console.log("Error obteniendo la solicitud:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateAdoptionRequest = {
      dog: dog._id, 
      user: user._id,
      adoptionRequestState,
      requestDate,
      resolutionDate,
      comments,
    };

    try {
      const response = await service.patch(`/adoption/${params.adoptionId}`, updateAdoptionRequest);
      console.log("Solicitud de adopción actualizada:", response);
      navigate("/adoptions"); // Redirige a la lista de adopciones
    } catch (error) {
      console.log("Error actualizando la solicitud:", error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await service.delete(`/adoption/${params.adoptionId}`);
      console.log("Solicitud de adopción eliminada:", response);
      navigate("/adoptions");
    } catch (error) {
      console.log("Error eliminando la solicitud:", error);
    }
  };


  return (
    <Container className="text-center mt-5">
      <h4>Editar Solicitud de Adopción</h4>
      <Card className="p-4 mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Perro</Form.Label>
            <Form.Control type="text" value={dog} onChange={(e) => setDog(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" value={user} onChange={(e) => setUser(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de Solicitud</Form.Label>
            <Form.Control type="date" value={requestDate} onChange={(e) => setRequestDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
          </Form.Group>

          <Button type="submit" variant="primary" className="me-2">
            Guardar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default EditAdoptionRequestPage;
