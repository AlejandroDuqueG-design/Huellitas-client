import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard() {
  const [nameValue, setNameValue] = useState(nameValue);
  const [ageValue, setAgeValue] = useState(ageValue);
  const [breedvalue, setBreedvalue] = useState(breedvalue);
  const [sexValue, setSexValue] = useState(sexValue);

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Body>
        <form className="">
          <label>
            <h6>Name:</h6>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
            />
          </label>

          <label>
            <h6>Age:</h6>
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={ageValue}
              onChange={(event) => {
                setAgeValue(event.target.value);
              }}
            />
          </label>

          <label>
            <h6>Breed:</h6>
            <input
              type="text"
              name="breed"
              placeholder="Breed"
              value={breedValue}
              onChange={(event) => {
                setBreedvalue(event.target.value);
              }}
            />
          </label>

          <label>
            <h6>Sex:</h6>
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              value={sexValue}
              onChange={(event) => {
                setSexValue(event.target.value);
              }}
            />
          </label>
        </form>
      </Card.Body>
      <Card.Footer className="bg-primary">
        <Link to={`/dog.details/${id}`}>
          <Button variant="light">Dog Details</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
export default DogCard;
