import { useEffect, useState } from "react";

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
    <div>Mis solicitudes de Adopción</div>
  )
}
export default MyAdoptionRequestPage