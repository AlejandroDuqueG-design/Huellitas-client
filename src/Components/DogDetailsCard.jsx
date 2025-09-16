import { Link, useNavigate } from "react-router"

function DogDetailsCard({id, name, age, breed, sex, size, adoptionStatus, image, entryDate, description}) {



  return (

    <div>
        
        DogDetailsCard
        <Link to={`/dog-details/`}>
        <button>Ver más</button>
        </Link>

    </div>
  )
}
export default DogDetailsCard