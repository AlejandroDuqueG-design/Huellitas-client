import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";


function OnlyPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return;
  } else {
    return isLoggedIn ? props.children : <Navigate to="/login"/>
  }
}
export default OnlyPrivate;
