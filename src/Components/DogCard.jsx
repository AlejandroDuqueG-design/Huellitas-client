import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function DogCard() {
    const [nameValue, setNameValue] = useState(nameValue);
    const [ageValue, setageValue] = useState(ageValue);   
    const [breedvalue, setbreedvalue] = useState(breedvalue);
    const [sexValue, setsetsexValue] = useState(sexValue);

  return (

<Card className="text-center" style={{ width: "18rem" }}>
        <Card.Body>
          <form className="">
            <label>
              <h6>Name:</h6>
              <input
                type="text"
                name="commonName"
                placeholder="Common Name"
                value={commonNameValue}
                onChange={(event) => {
                  setCommonNameValue(event.target.value);
                }}
              />
            </label>

            <label>
              <h6>Scientific Name:</h6>
              <input
                type="text"
                name="scientificName"
                placeholder="Scientific Name"
                value={scientificNameValue}
                onChange={(event) => {
                  setScientificNameValue(event.target.value);
                }}
              />
            </label>

            <label>
              <h6>Type: </h6>
              <select
                name="type"
                value={typeValue}
                onChange={(event) => {
                  setTypeValue(event.target.value);
                }}
              >
                <option value="Tree">Tree</option>
                <option value="Shrub">Shrub</option>
                <option value="Succulent">Succulent</option>
                <option value="Cactus">Cactus</option>
                <option value="Climber">Climber</option>
                <option value="Bush">Bush</option>
                <option value="Herbaceous Perennial">Herbaceous Perennial</option>
                <option value="Herbaceous Shrub">Herbaceous Shrub</option>
              </select>
            </label>
          </form>
        </Card.Body>
        <Card.Footer className="bg-success">
          <Link to={`/plant-details/${id}`}>
            <Button variant="light">Plant Details</Button>
          </Link>
        </Card.Footer>
      </Card>
  )
}
export default DogCard