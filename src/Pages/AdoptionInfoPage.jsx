import { useEffect, useState } from "react";

function AdoptionInfoPage() {

  const [adoptionL, setAdoptionList] = useState([]);

  useEffect(()=>{

    getData()

  }, [])

  const getData = async ()=> {
    try {
      const response = await service.get (`${import.meta.env.VITE_SERVER_URL}/api/adoption`)
      console.log("Comprobando lista de Adopciones", response)
      setAdoptionList(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (

    <div>

      <h6>Adoption Process</h6>

      <p>Nuestros procesos de adopción están sujetos a confirmación de datos y visitas para corroborar que quien solicita adoptar con nostros cumple con las condiciones para dar a nuestros queridos perros la calidad de vida que ellos necesitan.</p>

      </div>
  )
}
export default AdoptionInfoPage