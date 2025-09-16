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
      console.log("Get Data")
      console.log("Obteniendo detalles del perro", response)
      setDogDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    
      <h5>Detalles de {dogDetails.name}</h5>


      <Card className="text-center" style={{ width: "25rem" }}>
      
      <h5>Name: {dogDetails.name}</h5>
      <h5>Age: {dogDetails.age}</h5>
      <h5>Breed: {dogDetails.breed}</h5>
      <h5>Sex: {dogDetails.sex}</h5>
      <h5>Size: {dogDetails.size}</h5>
      <h5>Adoption Request State: {dogDetails.adoptionRequestState}</h5>
      <h5>Image: {dogDetails.image}</h5>
      <h5>Entry Date: {dogDetails.entryDate}</h5>
      <h5>Description: {dogDetails.description}</h5>

      <Link to={`/adoption-request/${params.dogId}`}><Button>Adoptar</Button></Link>

    </Card>

    </>
  );
}
export default DogDetailsPage;
