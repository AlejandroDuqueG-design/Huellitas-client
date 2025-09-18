import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { useState } from "react";

function AdoptionCard({ _id, dog, user, adoptionRequestState, requestDate, resolutionDate, comments }) {



  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Header className="text-white" style={{ backgroundColor: "#2a8891ff" }}>
          {" "}
          <h4>{}</h4>
        </Card.Header>
        <Card.Img variant="top"></Card.Img>
        <Card.Body>
          <h6>Perro: {dog.name}</h6>
          <h6>Usuario: {user.name}</h6>
          <h6>Estado Solicitud: {adoptionRequestState}</h6>
          <h6>Fecha Solicitud: {requestDate}</h6>
          <h6>Fecha Resolución: {resolutionDate}</h6>
          <h6>Comentarios: {comments}</h6>
        </Card.Body>

        <Link to={`/edit-adoption/${_id}`}>
          <Button className="" style={{ backgroundColor: "#2a8891ff" }}>
            Editar
          </Button>
        </Link>
      </Card>
    </div>
  );
}
export default AdoptionCard;
