import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import DogListPage from "./Pages/DogListPage";
import UserListPage from "./Pages/UserListPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import MyProfilePage from "./Pages/MyProfilePage"
import MainNavBar from "./Components/MainNavBar";
import LoginPage from "./Pages/LogInPage";
import SignupPage from "./Pages/SignUpPage";
import OnlyPrivate from "./Components/OnlyPrivate";
import DogDetailsPage from "./Pages/DogDetailsPage";
import AdoptionInfoPage from "./Pages/AdoptionInfoPage";
import AdoptionRequestPage from "./Pages/AdoptionRequestPage";
import AdoptionDetailsPage from "./Pages/AdoptionDetailsPage";
import MyAdoptionRequestPage from "./Pages/MyAdoptionRequestPage";
import AboutUsPage from "./Pages/AboutUsPage";


function App() {
  return (
    //Se registran aqui TODAS las rutas de Frontend
    <div>
      <MainNavBar/>
      
      <Routes>
        <Route path="/signup" element= { <SignupPage/> }/>
        <Route path="/login" element= { <LoginPage/> }/>
        <Route path="/" element= { <HomePage/> }/>
        <Route path="/dog" element= { <DogListPage/> }/>
        <Route path="/dog-details/:dogId" element= { <DogDetailsPage/> }/>
        <Route path="/adoption" element= { <AdoptionInfoPage/> }/>
        <Route path="/aboutus" element= { < AboutUsPage/> }/>
        <Route path="/adoption-request/:dogId" element= { <AdoptionRequestPage/> }/>
        <Route path="/adoption-details/:adoptionId" element= { <AdoptionDetailsPage/> }/>
        <Route path="/user" element= { <UserListPage/> }/>
        <Route path="/user-details/:userId" element= { <UserDetailsPage/>}/> 
        <Route path="/my-profile" element={<OnlyPrivate> < MyProfilePage /> </OnlyPrivate>} />
        <Route path="/myadoption-request" element={<OnlyPrivate> < MyAdoptionRequestPage /> </OnlyPrivate>} />
      </Routes>

    </div>
  );
}

export default App;
