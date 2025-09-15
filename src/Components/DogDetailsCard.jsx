import { Link } from "react-router"

function DogDetailsCard() {


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