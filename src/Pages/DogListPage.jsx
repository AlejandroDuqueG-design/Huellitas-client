import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import service from "../services/config.services"
import DogCard from "../Components/DogCard";

function DogListPage() {


  const [dogList, setdogList]  = useState([]);

  useEffect(() => {

    getData()

  }, [])

  const getData = async ()=> {
    try {
      const response = await service.get (`${import.meta.env.VITE_SERVER_URL}/dog`)
      console.log("Comprobando lista de Perros", response)
      setdogList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="d-flex flex-column gap-4 my-4 align-items-center">
      {dogList.map((eachDog)=> {
        return <DogCard key={eachDog.id} {...eachDog}/>
      })}

      <div>
        <Link to="/dog-details"></Link>
      </div>
    </div>


  )
}
export default DogListPage