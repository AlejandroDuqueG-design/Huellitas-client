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

    <div className="d-flex flex-column gap-1 my-4 align-items-center">
      <h3 className="fw-bold"> 🐶 Nuestros Peluditos</h3>
      <p className="text-muted" >Aqui puedes encontrar a todos los perritos que tenemos en este momento en el refugio</p>
      <Row className="justify-content-center">
        <Col xs={40}>
          <Form.Select size="lg" className="mt-1" name="sex" value={selectedBySex} onChange={(event) => setSelectedBySex(event.target.value)}>
            <option value="">Filtrar Perritos</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="g-4 my-4 mx-3">
  {dogList.map((eachDog) => {
    return (
      <Col key={eachDog._id} xs={12} sm={6} md={4} lg={3}>
        <DogCard {...eachDog} />
      </Col>
    );
  })}
</Row>
      <div>
        <Link to="/dog-details"></Link>
      </div>
    </div>
  );
}
export default DogListPage;
