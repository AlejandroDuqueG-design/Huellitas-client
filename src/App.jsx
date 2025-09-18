import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import DogListPage from "./Pages/DogListPage";
import MyProfilePage from "./Pages/MyProfilePage";
import MainNavBar from "./Components/MainNavBar";
import LoginPage from "./Pages/LogInPage";
import SignupPage from "./Pages/SignUpPage";
import OnlyPrivate from "./Components/OnlyPrivate";
import DogDetailsPage from "./Pages/DogDetailsPage";
import AdoptionInfoPage from "./Pages/AdoptionInfoPage";
import AdoptionRequestPage from "./Pages/AdoptionRequestPage";
import MyAdoptionRequestPage from "./Pages/MyAdoptionRequestPage";
import AboutUsPage from "./Pages/AboutUsPage";
import DogCreatePage from "./Pages/DogCreatePage";
import EditDogPage from "./Pages/EditDogPage";
import EditAdoptionRequestPage from "./Pages/EditAdoptionRequestPage";
import ErrorPage from "./Pages/ErrorPage";
import AllAdoptionRequestsPage from "./Pages/AllAdoptionRequestsPage";

function App() {
  return (
    //Se registran aqui TODAS las rutas de Frontend
    <div>
      <MainNavBar />

      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/new-dog" element={<DogCreatePage />} />
        <Route path="/dog" element={<DogListPage />} />
        <Route path="/dog-details/:dogId" element={<DogDetailsPage />} />
        <Route path="/edit-dog/:dogId" element={<EditDogPage />} />
        <Route path="/adoption" element={<AdoptionInfoPage />} />
        <Route path="/edit-adoption/:adoptionId" element={<EditAdoptionRequestPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/adoption-request/:dogId" element={<AdoptionRequestPage />} />
        <Route path="/adoption/user/:userId" element={<AllAdoptionRequestsPage />} />

        <Route
          path="/my-profile"
          element={
            <OnlyPrivate>
              {" "}
              <MyProfilePage />{" "}
            </OnlyPrivate>
          }
        />
        <Route path="/myadoption-request" element={<MyAdoptionRequestPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
