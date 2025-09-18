import { useEffect, useState } from "react";
import { Link } from "react-router";
import service from "../services/config.services";
import DogCard from "../Components/DogCard";
import { Col, Row, Form } from "react-bootstrap";

function DogListPage() {
  const [dogList, setDogList] = useState([]);
  const [selectedBySex, setSelectedBySex] = useState("");

  useEffect(() => {
    getData();
  }, [selectedBySex]);

  const getData = async () => {
    try {
      
      const response = await service.get(`/dog${selectedBySex ? `?sex=${selectedBySex}` : "" }`);
      console.log("Comprobando lista de Perros", response);
      setDogList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //FILTRO

    <div className="d-flex flex-column gap-4 my-4 align-items-center">
      <h4>Nuestros Peluditos</h4>
      <Row className="justify-content-center">
        <Col xs={20}>
          <Form.Select className="mt-3" name="sex" value={selectedBySex} onChange={(event) => setSelectedBySex(event.target.value)}>
            <option value="">Filtrar Perritos</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </Form.Select>
        </Col>
      </Row>

      <div className="d-flex flex-column flex-lg-row flex-lg-wrap gap-4 my-4 align-items-center align-items-lg-stretch ms-5">
        {dogList.map((eachDog) => {
          return <DogCard key={eachDog._id} {...eachDog} />;
        })}
      </div>

      <div>
        <Link to="/dog-details"></Link>
      </div>
    </div>
  );
}
export default DogListPage;
