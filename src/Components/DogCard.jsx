import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard() {
    const [nameValue, setNameValue] = useState(nameValue);
    const [ageValue, setageValue] = useState(ageValue);   
    const [breedvalue, setbreedvalue] = useState(breedvalue);
    const [sexValue, setsetsexValue] = useState(sexValue);

  return (

    <div>
       <Card>
        <p>Card para info Geral Dogs</p>
       </Card>
    </div>
  )
}
export default DogCard