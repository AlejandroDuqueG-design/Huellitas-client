import { useState } from "react";
import service from "../services/config.services";
import { Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function DogCreatePage() {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // for a loading animation effect

  const [name, setName] = useState(""); //useState: Lo que va dentro del es lo que indica el valor inicial del estado
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [image, setImage] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [description, setDescription] = useState("");

    const handleFileUpload = async (event) =>{
    if (!event.target.files[0]) {
    // to prevent accidentally clicking the choose file button and not selecting a file
    return;
  }
  const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
  uploadData.append("image", event.target.files[0]);
  setIsUploading(true); // to stop the loading animation
 
  //     this name needs to match the name used in the middleware in the backend => uploader.single("image")

  try {
    const response = await service.post("/upload", uploadData)
    // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)
    console.log("Subiendo Imagen", response)
    setImageUrl(response.data.imageUrl);
  } catch (error) {
    console.log("Error subiendo la imagen", error)
    navigate("/error");
  }

  setIsUploading(false); 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newDog = {
      name: name, // Como el nombre es el mismo de la variable de donde viene, se puede escribir igual, tal y como se ve abajo
      age: age,
      breed,
      sex,
      size,
      adoptionStatus,
      image:imageUrl,
      entryDate,
      description,
    };

    console.log(newDog);

    try {
      const response = await service.post(`/dog`, newDog);
      console.log("Nuevo perro creado correctamente", response);
      navigate("/dog");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Card className="text-center mt-3">
      <Card.Title className="mt-3">
        <h5>Nueva alta para Perrito</h5>
      </Card.Title>

      <Form className="text-center" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            Nombre:
            <Form.Control type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Edad:
            <Form.Control type="text" name="age" value={age} onChange={(event) => setAge(event.target.value)} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Raza:
            <Form.Control type="text" name="breed" value={breed} onChange={(event) => setBreed(event.target.value)} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Sexo:
            <Form.Select type="select" name="sex" value={sex} onChange={(event) => setSex(event.target.value)}>
              <option value="">-- Selecciona el sexo --</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </Form.Select>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Tamaño:
            <Form.Select type="select" name="size" value={size} onChange={(event) => setSize(event.target.value)}>
              <option>-- Selecciona el tamaño --</option>
              <option value="Mini">Mini</option>
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </Form.Select>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Estado de Solicitud Adopción:
            <Form.Control type="text" name="adoptionStatus" value={adoptionStatus} onChange={(event) => setAdoptionStatus(event.target.value)} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Foto:
            <Form.Control type="file" name="image" onChange={(handleFileUpload)} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Fecha de Entrada:
            <Form.Control type="date" name="entryDate" value={entryDate} onChange={(event) => setEntryDate(event.target.value)} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Descripción:
            <Form.Control type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
          </Form.Label>
        </Form.Group>

        {isUploading ? <h3>... uploading image</h3> : null}
         {imageUrl ? (<div><img src={imageUrl} alt="img" width={200} /></div>) : null}

        <button type="submit"> Registrar</button>
      </Form>
    </Card>
  );
}
export default DogCreatePage;
