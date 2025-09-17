import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import service from "../services/config.services";
import { Button, Card, Form } from "react-bootstrap";

function DogDetailsPage(_id, name, age, breed, sex, size, adoptionRequestState, image, entryDate, description ) {

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
    
      


      <Card className="text-center align-self-center" style={{ width: "38rem" }}>
      <Card.Body className="mb-2 mt-2"><h5>Información de {dogDetails.name}</h5></Card.Body>
      <h6>Name: {dogDetails.name}</h6>
      <h6>Age: {dogDetails.age}</h6>
      <h6>Breed: {dogDetails.breed}</h6>
      <h6>Sex: {dogDetails.sex}</h6>
      <h6>Size: {dogDetails.size}</h6>
      <h6>Adoption Request State: {dogDetails.adoptionRequestState}</h6>
      <h6>Image: {dogDetails.image}</h6>
      <h6>Entry Date: {dogDetails.entryDate}</h6>
      <h6>Description: {dogDetails.description}</h6>

      <Link to={`/adoption-request/${params.dogId}`}><Button>Adoptar</Button></Link>
      <Link to={`/edit-dog/${params.dogId}`}><Button>Editar</Button></Link>
    </Card>

    </>
  );
}
export default DogDetailsPage;
