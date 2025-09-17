import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router";
import service from "../services/config.services";

function AdoptionRequestPage() {

  const navigate = useNavigate()

  const params = useParams();
  console.log("Comprobando los params", params);

  const [dogDetails, setDogDetails] = useState({});

  const [dog, setDog] = useState("");
  const [user, setuser] = useState("");
  const [adoptionRequestState, setAdoptionRequestState] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [resolutionDate, setResolutionDate] = useState("");
  const [comments, setComments] = useState("");

const handleSubmit = async (event) => {
event.preventDefault();

const newAdoptionRequest = {
  dog:dog,
  user:user,
  adoptionRequestState:adoptionRequestState,
  requestDate:requestDate,
  resolutionDate: resolutionDate,
  comments: comments
}
console.log("Comprobando el:", newAdoptionRequest)

try {
  const response = await service.post ("/adoption", newAdoptionRequest)
  navigate ("/myadoption-request")
} catch (error) {
  console.log(error)
}
}

  return (
    <div>
      <p>Solicitud de Adopción para: {dogDetails.name}</p>
      <p>{dogDetails.breed}</p>
      <p> de {dogDetails.age} años</p>

      <Card>
        <Form onSubmit={handleSubmit}>
          {/* <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="name" placeholder="Adoption Request State"value={adoptionRequestState} onChange={(event) => setAdoptionRequestState(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group> */}
          <Form.Group>
            <Form.Label>
              <Form.Control type="date" name="RequestDate" placeholder="Request Date" value={requestDate} onChange={(event) => setRequestDate(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control type="date" name="name" placeholder="Resolution Date" value={resolutionDate} onChange={(event) => setResolutionDate(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="name" placeholder="Comments" value={comments} onChange={(event) => setComments(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
        <Button type="submit">Enviar</Button> <Button >Cancelar</Button>
        </Form>
        <Link to={`/edit-adoption/${params.adoptionId}`}><Button>Editar</Button></Link>
      </Card>
    </div>
  );
}
export default AdoptionRequestPage;
