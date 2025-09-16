import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/auth.context";


function OnlyPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/login"/>;
  } else {
    return props.children  
  }
}
export default OnlyPrivate;
