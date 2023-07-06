import React, { useContext } from "react";
import Footer from "./assets/Page Components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Page Components/Navbar";
import Auth from "./assets/Authentication/Auth"
import Profile from "./assets/Pages/Profile"
import StudyContainer from "./assets/Page Components/StudyContainer";
import ProtectedRoute from "./assets/Page Components/ProtectedRoutes";
import {UserContext} from "./assets/context/UserProvider";
import Notes from "./assets/Notes/Notes";
import "./App.css"
import Decks from "./assets/Decks/Decks";
function App() {
  const { token, logout } = useContext(UserContext);

  return (
    <div className="App">
      {token && <Navbar logout={logout} />}
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/decks"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Decks/>
            </ProtectedRoute>
          }
        />
          <Route
          path="/notes"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Notes/>
            </ProtectedRoute>
          }
        />
        <Route
        path="/study"
        element={
          <ProtectedRoute token={token} redirectTo="/">
            <StudyContainer />
          </ProtectedRoute>
        }
      />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
