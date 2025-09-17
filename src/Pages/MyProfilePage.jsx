import { useEffect } from "react";
import service from "../services/config.services";
import { Container } from "react-bootstrap";

function MyProfilePage() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`${import.meta.env.VITE_SERVER_URL}/api/user/my-profile`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>
    <Container className="text-center">

    <h5>Perfil</h5>
    <p>Area personal</p>

    </Container>
    
  </div>;
}
export default MyProfilePage;
