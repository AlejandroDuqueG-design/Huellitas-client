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
      <Container className="mt-5">
  <div className="text-center mb-4">
    <h3 className="fw-bold">📋 Mis Solicitudes de Adopción</h3>
    <p className="text-muted">
      Aquí encontrarás un listado con todas las solicitudes de adopción que has realizado en nuestro refugio.
    </p>
  </div>

  {myAdoptionRequest.length > 0 ? (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {myAdoptionRequest.map((eachAdoptionRequest) => (
        <AdoptionCard key={eachAdoptionRequest._id} {...eachAdoptionRequest} />
      ))}
    </div>
  ) : (
    <div className="text-center text-muted mt-5">
      <p>No tienes solicitudes registradas todavía 🐾</p>
    </div>
  )}
</Container>
    </div>
  );
}
export default MyAdoptionRequestPage;
