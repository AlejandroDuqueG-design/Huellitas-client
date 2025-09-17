import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import service from "../services/config.services";
import { Container } from "react-bootstrap";

function EditAdoptionRequestPage(_id, dog, user, adoptionRequestState, requestDate, resolutionDate, comments) {
  //   const [dog, setDog] = useState("");
  //   const [user, setuser] = useState("");
  //   const [adoptionRequestState, setAdoptionRequestState] = useState("");
  //   const [requestDate, setRequestDate] = useState("");
  //   const [resolutionDate, setResolutionDate] = useState("");
  //   const [comments, setComments] = useState("");

  const [adoptionRequestDetails, setAdoptionRequestDetails] = useState([]);

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/adoption/${params.adoptionId}`);
      console.log("Obteniendo las adoption requests", response);
      setAdoptionRequestDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await service.patch(`/adoption/${params.adoptionId}`);
      console.log("Editar adoption Request", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await service.delete(`/adoption/${params.adoptionId}`);
      console.log("Solicitud de adopción eliminada", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className="text-center">
        <h6>Solicitud de Adopción</h6>
        </Container>
    </div>
  );
}
export default EditAdoptionRequestPage;
