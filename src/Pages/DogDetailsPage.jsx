import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import service from "../services/config.services";
import { Button, Card, Form } from "react-bootstrap";

function DogDetailsPage(_id, name, age, breed, sex, size, adoptionStatus, image, entryDate, description) {
  const [dogDetails, setDogDetails] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/dog/${params.dogId}`);
      console.log("Get Data in DogDetailsPage", response);
      setDogDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card className="text-center align-self-center mt-5 mx-auto" style={{ maxWidth: "600px", backgroundColor: "#cfecf5ff" }}>
        <Card.Header className="mb-2 mt-2">
          <h3 className="fw-bold">Información de {dogDetails.name}</h3>
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src={dogDetails.image}
            style={{
              width: "100%", // ocupa todo el ancho del card
              height: "400px", // altura fija (ajústala según necesites)
              objectFit: "cover", // recorta sin deformar
              borderRadius: "5px",
              marginBottom: "1rem",
            }}
          ></Card.Img>
          <p>
            <strong>Nombre:</strong> {dogDetails.name}
          </p>
          <p>
            <strong>Edad:</strong> {dogDetails.age}
          </p>
          <p>
            <strong>Raza:</strong> {dogDetails.breed}
          </p>
          <p>
            <strong>Sexo:</strong> {dogDetails.sex}
          </p>
          <p>
            <strong>Tamaño:</strong> {dogDetails.size}
          </p>
          <p>
            <strong>Estado de Adopción:</strong>
            {dogDetails.adoptionRequestState}
          </p>
          <p>
            <strong>Fecha de Entrada:</strong> {dogDetails.entryDate}
          </p>
          <p>
            <strong>Descripción:</strong> {dogDetails.description}
          </p>
        </Card.Body>

        <Link to={`/adoption-request/${params.dogId}`}>
          <Button
            className="mb-2"
            style={{
              backgroundColor: "#2a8891ff", // tu color personalizado
              borderColor: "#2a8891ff", // opcional: para que borde combine
              color: "white", // color del texto
            }}
          >
            Adoptar
          </Button>
        </Link>
        <Link to={`/edit-dog/${params.dogId}`}>
          <Button
            className="mt-1"
            variant="outline-primary"
            style={{
              borderColor: "#2a8891ff", // opcional: para que borde combine
              color: "#2a8891ff", // color del texto
            }}
          >
            Editar
          </Button>
        </Link>
      </Card>
    </>
  );
}
export default DogDetailsPage;
