import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard({ _id, name, age, breed, sex, image }) {
  return (
    <>
      <Card className="h-100 shadow-sm">
        <Card.Header className="text-white" style={{ backgroundColor: "#2a8891ff" }}>
          {" "}
          <h4>{name}</h4>
        </Card.Header>
        <Card.Img
          variant="top "
          src={image}
          style={{
            height: "400px", // mismo alto para todas las imágenes
            objectFit: "cover", // recorta sin deformar
          }}
        ></Card.Img>
        <Card.Body className="d-flex flex-column text-center">
          <h6>Edad: {age}</h6>
          <h6>Raza: {breed}</h6>
          <h6>Sexo: {sex}</h6>
          <div className="mt-auto text-center mt-2">
            <Link to={`/dog-details/${_id}`}>
              <Button style={{ backgroundColor: "#2a8891ff" }}>
                Conoceme!
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default DogCard;
