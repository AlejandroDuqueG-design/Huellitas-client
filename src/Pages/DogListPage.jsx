import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import service from "../services/config.services"
import DogCard from "../Components/DogCard";

function DogListPage() {

  const [dogList, setDogList]  = useState([]);
   const [selectedType, setSelectedType] = useState("");

  useEffect(() => {

    getData()

  }, [selectedType])

  const getData = async ()=> {
    try {
      const response = await service.get (`${import.meta.env.VITE_SERVER_URL}/api/dog`)
      console.log("Comprobando lista de Perros", response)
      setDogList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="d-flex flex-column gap-4 my-4 align-items-center">
      <h4>Nuestros Peluditos</h4>

      <div className="d-flex flex-column flex-lg-row flex-lg-wrap gap-4 my-4 align-items-center align-items-lg-stretch">
      {dogList.map((eachDog)=> {
        return <DogCard key={eachDog._id} {...eachDog}/>
      })}
      </div>

      <div>
        <Link to="/dog-details"></Link>
      </div>
    </div>


  )
}
export default DogListPage