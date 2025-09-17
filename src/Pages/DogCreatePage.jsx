import {useState } from "react";
import service from "../services/config.services";
import { Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router";


function DogCreatePage() {
  const navigate = useNavigate();

  const [name, setName] = useState(""); //useState: Lo que va dentro del es lo que indica el valor inicial del estado
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [adoptionRequestState, setAdoptionRequestState] = useState("");
  const [image, setImage] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newDog = {
      name: name, // Como el nombre es el mismo de la variable de donde viene, se puede escribir igual, tal y como se ve abajo
      age: age,
      breed,
      sex,
      size,
      adoptionRequestState,
      image,
      entryDate,
      description,
    };

    console.log(newDog);

    try {
      const response = await service.post(`/dog`, newDog);
      console.log("Nuevo perro creado correctamente", response)
      navigate("/dog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="text-center" >
      <Card.Title><h5>Nueva alta para Perrito</h5></Card.Title>

      <Form className="text-center" onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>
        Nombre: 
        <Form.Control type="text" name="title" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label>
        Edad:
        <Form.Control type="text" name="description" value={age} onChange={(event) => setAge(event.target.value)} />
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label>
        Raza:
        <Form.Control type="select" name="title" value={breed} onChange={(event) => setBreed(event.target.value)} />
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label>
        Sexo:
        <Form.Select type="text" name="title" value={sex} onChange={(event) => setSex(event.target.value)}>  
          <option value="">-- Selecciona el sexo --</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option></Form.Select>
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label>
        Tamaño:
        <Form.Select type="text" name="title" value={size} onChange={(event) => setSize(event.target.value)}>  
          <option >-- Selecciona el tamaño --</option>
          <option value="mini">Mini</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option></Form.Select>
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label>
        Estado de Solicitud Adopción: 
        <Form.Control type="text" name="title" value={adoptionRequestState} onChange={(event) => setAdoptionRequestState(event.target.value)} />
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label>
        Foto: 
        <Form.Control type="text" name="title" value={image} onChange={(event) => setImage(event.target.value)} />
        </Form.Label>
        </Form.Group>
         <Form.Group>
        <Form.Label>
        Fecha de Entrada: 
        <Form.Control type="date" name="title" value={entryDate} onChange={(event) => setEntryDate(event.target.value)} />
        </Form.Label>
        </Form.Group>
         <Form.Group>
        <Form.Label>
        Descripción: 
        <Form.Control type="text" name="title" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Label>
        </Form.Group>
      
        <button type="submit"> Registrar</button>
      </Form>
    </Card>
  );
}
export default DogCreatePage;
