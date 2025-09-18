import { useNavigate, useParams } from "react-router";
import service from "../services/config.services";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

function EditDogPage() {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState(""); //En useState: Lo que va dentro, es lo que indica el valor inicial del estado
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [image, setImage] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

  //CONFIGURACIÖN DE CLOUDINARY
  const handleFileUpload = async (event) => {
    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }

    setIsUploading(true); // to start the loading animation

    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")

    try {
      const response = await service.post("/upload", uploadData);
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

      setImageUrl(response.data.imageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

      setIsUploading(false); // to stop the loading animation
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/dog/${params.dogId}`);
      console.log("Obteniendo detalles del perro en EditDogPage", response);
      setName(response.data.name);
      setAge(response.data.age);
      setBreed(response.data.breed);
      setSex(response.data.sex);
      setSize(response.data.size);
      setAdoptionStatus(response.data.adoptionStatus);
      setImage(response.data.image);
      setEntryDate(response.data.entryDate);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateDog = {
      name,
      age,
      breed,
      sex,
      size,
      adoptionStatus,
      image: imageUrl,
      entryDate,
      description,
    };

    try {
      const response = await service.patch(`/dog/${params.dogId}`, updateDog);
      console.log("Comprobando el .patch", response);
      navigate("/dog");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await service.delete(`/dog/${params.dogId}`);
      console.log("Comprobando Delete");
      navigate("/dog");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <h6>Detalles de {dogDetails.name}</h6> */}
      <Container className="mt-5">
        <Card onSubmit={handleSubmit} className="text-center mt-10" style={{ width: "25rem" }}>
          <Form>
            <Form.Group>
              <Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control type="text" name="age" placeholder="Edad" value={age} onChange={(event) => setAge(event.target.value)}></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control
                  type="text"
                  name="breed"
                  placeholder="Raza"
                  value={breed}
                  onChange={(event) => setBreed(event.target.value)}
                ></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Select type="text" name="sex" placeholder="Sexo" value={sex} onChange={(event) => setSex(event.target.value)}>
                  <option value="">-- Selecciona el sexo --</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                </Form.Select>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Select type="text" name="size" placeholder="Tamaño" value={size} onChange={(event) => setSize(event.target.value)}>
                  <option value="">-- Selecciona el tamaño --</option>
                  <option value="Mini">Mini</option>
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </Form.Select>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Select
                  type="text"
                  name="adoptionStatus"
                  placeholder="Estado de solicitud de adopción"
                  value={adoptionStatus}
                  onChange={(event) => setAdoptionStatus(event.target.value)}
                >
                  <option value="">-- Estado de Adopción --</option>
                  <option value="Adoptado">Adoptado</option>
                  <option value="En revisión">En revisión</option>
                  <option value="Disponible para adopción">Disponible para adopción</option>
                </Form.Select>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control type="file" name="image" placeholder="Foto" onChange={handleFileUpload} disabled={isUploading}></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control
                  type="text"
                  name="entryDate"
                  placeholder="Fecha de Entrada"
                  value={entryDate}
                  onChange={(event) => setEntryDate(event.target.value)}
                ></Form.Control>
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Descripción"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></Form.Control>
              </Form.Label>
            </Form.Group>
            <Button type="submit">Guardar</Button>
          </Form>
          <Button onClick={handleDelete}>Eliminar</Button>
        </Card>
      </Container>
    </div>
  );
}
export default EditDogPage;
