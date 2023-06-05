import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Page Components/Navbar"
import Auth from "./assets/Authorization/Auth";
import Profile from "./assets/Pages/Profile"
import People from "./assets/Pages/People"
import ProtectedRoute from "./assets/Page Components/ProtectedRoute";
import { UserContext } from "./context/UserProvider";
import "./App.css"
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
          path="/people"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <People />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;