import React, { useContext } from "react";
import Footer from "./assets/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Auth from "./assets/Auth";
import Profile from "./assets/Profile";
import StudyContainer from "./assets/StudyContainer";
import ProtectedRoute from "./assets/ProtectedRoute";
import { UserContext } from "./context/UserProvider";
import "./App.css"
import Decks from "./assets/Decks";
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
