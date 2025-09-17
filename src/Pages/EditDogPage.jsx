import { useNavigate, useParams } from "react-router";
import service from "../services/config.services";
import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function EditDogPage() {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState(""); //En useState: Lo que va dentro, es lo que indica el valor inicial del estado
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [adoptionRequestState, setAdoptionRequestState] = useState("");
  const [image, setImage] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();

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
      setAdoptionRequestState(response.data.adoptionRequestState);
      setImage(response.data.image);
      setEntryDate(response.data.entryDate);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await service.patch(`/dog/${params.dogId}`);
      console.log("Comprobando el .patch", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      await service.delete(`/dog/${params.dogId}`);
      console.log("Comprobando Delete");
      navigate("/dog-details/:dogId");
    } catch (error) {
      console.log(error);
    }
  };

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
    const response = await service.post("/upload", uploadData)
    // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

    setImageUrl(response.data.imageUrl);
    //                          |
    //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

    setIsUploading(false); // to stop the loading animation
  } catch (error) {
    navigate("/error");
  }
};

  return (
    <div>
      {/* <h6>Detalles de {dogDetails.name}</h6> */}

      <Card onSubmit={handleSubmit} className="text-center" style={{ width: "25rem" }}>
        <Form>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="age" placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control
                type="text"
                name="breed"
                placeholder="Breed"
                value={breed}
                onChange={(event) => setBreed(event.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="sex" placeholder="Sex" value={sex} onChange={(event) => setSex(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control type="text" name="size" placeholder="Size" value={size} onChange={(event) => setSize(event.target.value)}></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control
                type="text"
                name="adoptionRequestState"
                placeholder="Adoption Request State"
                value={adoptionRequestState}
                onChange={(event) => setAdoptionRequestState(event.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control
                type="file"
                name="image"
                placeholder="Image"
                value={image}
                onChange={(handleFileUpload) => setImageUrl(handleFileUpload.target.value)}
                disabled={isUploading}
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <Form.Control
                type="text"
                name="entryDate"
                placeholder="Entry Date"
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
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></Form.Control>
            </Form.Label>
          </Form.Group>
          <Button type="submit">Guardar</Button>
        </Form>
        <Button onClick={handleDelete}>Eliminar</Button>
      </Card>
    </div>
  );
}
export default EditDogPage;
