import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard({_id, name, age, breed, sex}) {


  
  return (

    <>
    <h4>Nuestros Peluditos</h4>
    <Card className="text-center" style={{ width: "18rem" }}>
      
      <h5>Name: {name}</h5>
      <h5>Age: {age}</h5>
      <h5>Breed: {breed}</h5>
      <h5>Sex: {sex}</h5>

      <Link to={`/dog-details/${_id}`}><Button>Conoceme!</Button></Link>

    </Card>
    </>
  );
}
export default DogCard;
