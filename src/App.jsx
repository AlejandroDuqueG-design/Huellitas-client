import { Route, Routes } from "react-router";
import MainNavBar from "./Components/MainNavBar";
import HomePage from "./Pages/HomePage";
import DogListPage from "./Pages/DogListPage";
import AdoptionListPage from "./Pages/AdoptionListPage";
import UserListPage from "./Pages/UserListPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <div>
    
    
      <MainNavBar/>
      <Routes>
        <Route path="/signup" element= { <SignUpPage/> }/>
        <Route path="/" element= { <HomePage/> }/>
        <Route path="/dog" element= { <DogListPage/> }/>
        <Route path="/dog-details/:dogId" element= { <DogListPage/> }/>
        <Route path="/adopt" element= { <AdoptionListPage/> }/>
        <Route path="/adopt-details/:adoptId" element= { <AdoptionListPage/> }/>
        <Route path="/user" element= { <UserListPage/> }/>
        <Route path="/user-details/:userId" element= { <UserDetailsPage/>}/> 
      </Routes>

    </div>
  );
}

export default App;
