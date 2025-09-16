import { useEffect } from "react";
import axios from "axios";
import service from "../services/config.services";

function MyProfilePage() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`${import.meta.env.VITE_SERVER_URL}/api/user/my-profile`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return
  
  <div>PROFILE</div>;
}
export default MyProfilePage;
