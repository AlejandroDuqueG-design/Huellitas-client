import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function MyAdoptionRequestPage() {


    const [myAdoptionRequest, setmyAdoptionRequest] = useState([]);

    useEffect(()=>{
        getData()
        
    },[])

    const getData = async () => {
        try {
            const response = service.get("/api/myadoption-request")
            console.log("Mis solicitudes de Adopción", response)
        } catch (error) {
            console.log(error)
        }
    }



  return (

    <div>
        <Container className="text-center">

        <h6>Mis Solicitudes de Adopción</h6>
        <p>Este apartado contiene un listado de todas las solicitudes de adopción que ha hecho en nuestro refugio</p>

        </Container>
        
        </div>
  )
}
export default MyAdoptionRequestPage