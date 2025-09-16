import { useEffect } from "react";

function AdoptionListPage() {

  const [adoptionList, setAdoptionList] = useState([]);

  useEffect(()=>{

    getData()

  }, [])

  const getData = async ()=> {
    try {
      const response = await service.get (`${import.meta.env.VITE_SERVER_URL}/adoption`)
      console.log("Comprobando lista de Adopciones", response)
      setAdoptionList(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div>AdoptionListPage</div>
  )
}
export default AdoptionListPage