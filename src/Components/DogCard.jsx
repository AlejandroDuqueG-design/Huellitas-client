import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard({_id, name, age, breed, sex, image}) {


  
  return (

    <>
    
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header style={{backgroundColor: "#60EDE1"}}> <h5>{name}</h5></Card.Header>
      <Card.Img variant="top"></Card.Img>
     
      <h5>Age: {age}</h5>
      <h5>Breed: {breed}</h5>
      <h5>Sex: {sex}</h5>

      <Link to={`/dog-details/${_id}`}><Button>Conoceme!</Button></Link>

    </Card>
    </>
  );
}
export default DogCard;
