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
    
    <h5>Perfil</h5>
    <p>Area personal</p>
    <Container fluid className="d-flex align-items-center justify-content-center" style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // altura de toda la ventana
        width: "100vw",  // ancho de toda la ventana
        margin: 0,
        padding: 0,
        color: "white",
        opacity: 0.7,
      }}>


    </Container>
    
  </div>;
}
export default MyProfilePage;
