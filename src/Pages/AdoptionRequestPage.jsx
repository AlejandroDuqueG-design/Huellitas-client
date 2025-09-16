import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router";
import service from "../services/config.services";

function AdoptionRequestPage() {
  const params = useParams();
  console.log("Comprobando los params", params);

  const [dogDetails, setDogDetails] = useState({});

  const [dog, setDog] = useState("");
  const [user, setuser] = useState("");
  const [adoptionRequestState, setAdoptionRequestState] = useState("");
  const [resolutionDate, setResolutionDate] = useState("");
  const [comments, setComments] = useState("");


  useEffect(() => {
    getDogData();
  
  }, []);

  const getDogData = async () => {
    try {
      const response = await service.get(`/dog/${params.dogId}`);
      console.log(response);
      setDogDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };


   const newAdoptionRequest = {

  }

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const response = await service.post(`/api/adoption`)
      console.log(response)
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
        <Form>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="name" placeholder="Nombre"></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="" placeholder="Texto" ></Form.Control>
            </Form.Label>
          </Form.Group>
        </Form>
        <Link to={"/myadoption-request"}><Button>Enviar</Button></Link> <Button >Cancelar</Button>
      </Card>
    </div>
  );
}
export default AdoptionRequestPage;
