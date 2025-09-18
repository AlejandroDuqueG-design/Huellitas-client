import { Button, Card } from "react-bootstrap"
import { Link, useParams } from "react-router"
import service from "../services/config.services"

function AdoptionCard({_id, dog, user, adoptionRequestState, requestDate, resolutionDate, comments}) {

    const params = useParams

    const handleDelete = async (event) => {
    event.preventDefault()

    try {
        const response = await service.delete (`/adoption/${params.userId}`)
        console.log("Solicitud de adopción eliminada:", response);
      navigate("/adoptions");
    } catch (error) {
        console.log(error)
    }
  }

  return (

    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header className="text-white" style={{backgroundColor: "#2a8891ff"}}> <h4>{}</h4></Card.Header>
      <Card.Img variant="top"></Card.Img>
      <Card.Body>
        <h6>Perro: {dog}</h6>
        <h6>Usuario: {user}</h6>
        <h6>Estado Solicitud: {adoptionRequestState}</h6>
        <h6>Fecha Solicitud: {requestDate}</h6>
        <h6>Fecha Resolución: {resolutionDate}</h6>
        <h6>Comentarios: {comments}</h6>
      
      
      </Card.Body>
      
      

      <Link to={"/edit-adoption/:adoptionId"}><Button className="" style={{backgroundColor: "#2a8891ff"}}>Editar</Button></Link>
      <Button onClick={handleDelete}>Eliminar</Button>

    </Card>
    </div>
  )
}
export default AdoptionCard