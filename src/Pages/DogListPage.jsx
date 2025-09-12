import axios from "axios";
import { useEffect, useState } from "react";

function DogListPage() {


  const [dogList, setdogList]  = useState([]);

  useEffect(() => {

  }, [])

  const getData = async ()=> {
    try {
      const response = await axios.get (`${import.meta.env.VITE_SERVER_URL}/dog}`)
      console.log(response)
      setdogList(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div>
      {dogList.map((eachDog)=> {
        return 
      })}
    </div>

  )
}
export default DogListPage