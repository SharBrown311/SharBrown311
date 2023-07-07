import React, { useContext, useRef } from "react";
import Footer from "./Header/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./assets/Auth"
import Profile from "./assets/Pages/Profile"
import StudyContainer from "./assets/Study/StudyContainer";
import ProtectedRoute from "./assets/Protected/ProtectedRoutes";
import { UserContext } from "./assets/context/UserProvider";
import Notes from "./assets/Notes/Notes";
import "./App.css"
import Decks from "./assets/Decks/Decks";
import Header from "./Header/Header";
function App() {
  const { token, logout } = useContext(UserContext);
  // const windowSize = useRef([window.outerWidth, window.outerHeight])
  return (
    <div className="App">
      <div id = 'js-preloader' className="js-preloader loaded">
        <div className="preloader-inner">
          <span className="dot">

          </span>
          <div className="dots">
              <span></span>
              <span></span>
              <span></span>

          </div>
        </div>
      </div>
      {token && <Header logout={logout} />}
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
    </div>
  );
}

export default App;
