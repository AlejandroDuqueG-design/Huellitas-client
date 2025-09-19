import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import service from "../services/config.services";
import { Button, Card, Container, Form} from "react-bootstrap";

function EditAdoptionRequestPage() {
  const [dogId, setDogId] = useState("");
  const [userId, setUserId] = useState("");
  const [dogName, setDogName] = useState({});
  const [userName, setUserName] = useState({});
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
      console.log("Comprobando Params", params.adoptionId)
      const response = await service.get(`/adoption/${params.adoptionId}`);
      console.log("Adoption", response.data)

      setDogId(response.data.dog._id);  
      setDogName(response.data.dog.name);
      setUserId(response.data.user._id)
      setUserName(response.data.user.name);
      setAdoptionRequestState(response.data.adoptionRequestState);
      setRequestDate(response.data.createdAt.slice(0,10));
      setResolutionDate(response.data.resolutionDate);
      setComments(response.data.comments);

    } catch (error) {
      console.log("Error obteniendo la solicitud:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateAdoptionRequest = {
      dog: dogId,
      user: userId,
      adoptionRequestState,
      requestDate,
      resolutionDate,
      comments,
    };

    console.log("Comprobando objeto", updateAdoptionRequest)

    try {
      const response = await service.patch(`/adoption/${params.adoptionId}`, updateAdoptionRequest);
      console.log("Solicitud de adopción actualizada:", response);
      navigate("/myadoption-request");
    } catch (error) {
      console.log("Error actualizando la solicitud:", error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await service.delete(`/adoption/${params.adoptionId}`);
      console.log("Solicitud de adopción eliminada:", response);
      navigate("/myadoption-request");
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
            <Form.Control type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" value={userName} onChange={(e) => setUserName(e.target.value)} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de Solicitud</Form.Label>
            <Form.Control type="date" value={requestDate} onChange={(e) => setRequestDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
          </Form.Group>

          <Button type="submit" className="me-2" style={{
              backgroundColor: "#2a8891ff",
              borderColor: "#2a8891ff", 
              color: "white", 
            }}>
            Guardar
          </Button>
          <Button variant="outline-secondary" onClick={handleDelete}>
            Eliminar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default EditAdoptionRequestPage;
