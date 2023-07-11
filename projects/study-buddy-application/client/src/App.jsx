import React, {useContext} from "react"
import {Routes, Route, Navigate} from 'react-router-dom'
import Auth from "./components/Auth"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import { UserContext } from "./context/UserProvider"
import Decks from "./pages/Decks"
import Notes from "./pages/Notes"
import StudyContainer from "./pages/StudyContainer"
import Header from './components/Header/Header'
import Banner from "./components/Banner"
function App() {
  const { token, logout } = useContext(UserContext);
return (
  <div className="App">
       <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
    </div>
{token && <Header logout = {logout} />}
<Banner />
<Routes>
  <Route path="/" element = {token ? <Navigate to ="/" /> : <Auth />}
  />
        <Route
          path="/home"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Home />
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
      <br />
      <Footer />
</div>
  )
}

export default App
