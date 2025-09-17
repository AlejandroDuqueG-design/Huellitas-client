import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard({_id, name, age, breed, sex, image}) {


  
  return (

    <>
    
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header style={{backgroundColor: "#68EBF7"}}> <h6>{name}</h6></Card.Header>
      <Card.Img variant="top"></Card.Img>
      <Card.Body><h6>Age: {age}</h6></Card.Body>
      <Card.Body><h6>Breed: {breed}</h6> </Card.Body>
      <Card.Body><h6>Sex: {sex}</h6> </Card.Body>
      
      

      <Link to={`/dog-details/${_id}`}><Button style={{backgroundColor: "#55989eff"}}>Conoceme!</Button></Link>

    </Card>
    </>
  );
}
export default DogCard;
