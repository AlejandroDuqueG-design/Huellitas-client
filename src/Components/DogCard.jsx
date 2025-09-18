import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard({_id, name, age, breed, sex, image}) {


  
  return (

    <>
    
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header className="text-white" style={{backgroundColor: "#2a8891ff"}}> <h4>{name}</h4></Card.Header>
      <Card.Img variant="top " src={image}></Card.Img>
      <Card.Body><h6>Edad: {age}</h6>
      <h6>Raza: {breed}</h6> 
      <h6>Sexo: {sex}</h6> </Card.Body>
      
      

      <Link to={`/dog-details/${_id}`}><Button className="mb-2" style={{backgroundColor: "#2a8891ff"}}>Conoceme!</Button></Link>

    </Card>
    </>
  );
}
export default DogCard;
