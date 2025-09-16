import { useEffect } from "react";
import UserCard from "../Components/UserCard";

function UserListPage() {

const [userList, setuserList] = useState([]);

useEffect(()=>{

  getData()

}, [])

const getData = async ()=>{
  try {
   const response = await service.get (`${import.meta.env.VITE_SERVER_URL}/user`)
      console.log("Comprobando lista de Usuarios", response)
      setuserList(response.data) 
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="d-flex flex-column gap-4 my-4 align-items-center">
      {userList.map((eachUser)=>{
        return <UserCard key={eachUser.id}{...eachUser}/>
      })}
    </div>
  )
}
export default UserListPage