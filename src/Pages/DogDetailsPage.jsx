import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DogDetailsCard from "../Components/DogDetailsCard";
import service from "../services/config.services";

function DogDetailsPage() {
  const [dogDetails, setdogDetails] = useState([]);
  const params = useParams;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`${import.meta.env.VITE_SERVER_URL}/dog/${params.dogId}`);
      setdogDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h5>See more details about me</h5>
      </div>

      <div className="">
        <DogDetailsCard {...dogDetails} />
      </div>
    </>
  );
}
export default DogDetailsPage;
