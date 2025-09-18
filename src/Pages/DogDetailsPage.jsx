import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import service from "../services/config.services";
import { Button, Card, Form } from "react-bootstrap";

function DogDetailsPage(_id, name, age, breed, sex, size, adoptionStatus, image, entryDate, description ) {

  const [dogDetails, setDogDetails] = useState([]);
  const params = useParams();

  console.log(params)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/dog/${params.dogId}`);
      console.log("Get Data in DogDetailsPage", response)
      setDogDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card className="text-center align-self-center mt-5" >
      <Card.Header className="mb-2 mt-2"><h5>Información de {dogDetails.name}</h5></Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={dogDetails.image}></Card.Img>
      <p><strong>Nombre:</strong> {dogDetails.name}</p>
      <p><strong>Edad:</strong> {dogDetails.age}</p>
      <p><strong>Raza:</strong> {dogDetails.breed}</p>
      <p><strong>Sexo:</strong> {dogDetails.sex}</p>
      <p><strong>Tamaño:</strong> {dogDetails.size}</p>
      <p><strong>Estado de Adopción:</strong>{dogDetails.adoptionRequestState}</p>
      <p><strong>Fecha de Entrada:</strong> {dogDetails.entryDate}</p>
      <p><strong>Descripción:</strong> {dogDetails.description}</p>
      </Card.Body>

      <Link to={`/adoption-request/${params.dogId}`}><Button className="mb-2" variant="primary">Adoptar</Button></Link>
      <Link to={`/edit-dog/${params.dogId}`}><Button className="mt-1" variant="outline-primary">Editar</Button></Link>
    </Card>

    </>
  );
}
export default DogDetailsPage;
