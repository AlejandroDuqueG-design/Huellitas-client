import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import DogListPage from "./Pages/DogListPage";
import AdoptionListPage from "./Pages/AdoptionListPage";
import UserListPage from "./Pages/UserListPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import MyProfilePage from "./Pages/MyProfilePage"
import MainNavBar from "./Components/MainNavBar";
import LoginPage from "./Pages/LogInPage";
import SignupPage from "./Pages/SignUpPage";
import OnlyPrivate from "./Components/OnlyPrivate";


function App() {
  return (
    <div>
    
    
      <MainNavBar/>
      <Routes>
        <Route path="/signup" element= { <SignupPage/> }/>
        <Route path="/login" element= { <LoginPage/> }/>
        <Route path="/" element= { <HomePage/> }/>
        <Route path="/dog" element= { <DogListPage/> }/>
        <Route path="/dog-details/:dogId" element= { <DogListPage/> }/>
        <Route path="/adopt" element= { <AdoptionListPage/> }/>
        <Route path="/adopt-details/:adoptId" element= { <AdoptionListPage/> }/>
        <Route path="/user" element= { <UserListPage/> }/>
        <Route path="/user-details/:userId" element= { <UserDetailsPage/>}/> 
        <Route path="/my-profile" element={<OnlyPrivate> < MyProfilePage /> </OnlyPrivate>} />
      </Routes>

    </div>
  );
}

export default App;
