import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import service from "../services/config.services";
import { Link, useParams } from "react-router";
import AdoptionCard from "../Components/AdoptionCard";

function MyAdoptionRequestPage() {
  const params = useParams ();
  const [myAdoptionRequest, setMyAdoptionRequest] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/adoption`);
      console.log("Mis solicitudes de Adopción", response);
      setMyAdoptionRequest(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Container className="text-center mt-5">
        <h6>Mis Solicitudes de Adopción</h6>
        <p>Este apartado contiene un listado de todas las solicitudes de adopción que ha hecho en nuestro refugio</p>

        <div className="d-flex flex-column gap-4 my-4 align-items-center">
          {myAdoptionRequest.map((eachAdoptionRequest) => {
            return <AdoptionCard key={eachAdoptionRequest._id} {...eachAdoptionRequest} />;
          })}

          <div>
            {/* <Link to="/edit-adoption/:adoptionId"></Link> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
export default MyAdoptionRequestPage;
