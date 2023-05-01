import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Navbar.jsx";
import Auth from "./assets/Auth.jsx";
import Profile from "./pages/Profile.jsx";
import Public from "./assets/PublicIssue.jsx";
import ProtectedRoutes from "./assets/ProtectedRoutes.jsx";
import { UserContext } from "./context/UserProvider.jsx";
import Footer from "./assets/Footer.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound";

export default function App() {
  
  const { token, logout } = useContext(UserContext);

  return (
    <div className="app">
      <Navbar logout={logout} token={token}/>
      <Routes>

         {token && <Route path="/" element={<Home />} />}
         {!token && <Route path="/" element={<Navigate to="/public" />} />}

        { !token &&
          <Route path="/auth" element={<Auth />} />
        }
        { token &&
          <Route path="/auth" element={<Navigate to="/" />} />
        }
        <Route
          path="/profile"
          element={
            <ProtectedRoutes token={token} redirectTo="/public">
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoutes token={token} redirectTo="/public">
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/public"
          element={<Public />}
        />
        <Route path="/*" element={
           <ProtectedRoutes token={token} redirectTo="/public">
           <NotFound />
         </ProtectedRoutes>
        } />
      </Routes>
      <Footer />
    </div>
  );
}