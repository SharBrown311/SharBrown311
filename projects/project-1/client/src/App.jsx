import React, {useContext} from "react"
import {Routes, Route, Navigate} from 'react-router-dom'
import Footer from "./assets/Page-Components/Main-Areas/Footer"
import ProtectedRoute from "./assets/Page-Components/Protected/ProtectedRoute"
import { UserContext } from "./context/UserProvider"
import Decks from "./assets/Application-Components/Cards-Decks/Decks"
import Notes from "./assets/Application-Components/Notes/Notes"
import StudyContainer from "./assets/Application-Components/Study/StudyContainer"
// import Header from "./assets/Page-Components/Main-Areas/Header.jsx"
import Banner from './assets/Page-Components/Main-Areas/Banner.jsx'
import ModalContainer from "./assets/Page-Components/Modal/ModalContainer"
import HomePage from './assets/Pages/HomePage.jsx'
import Navbar from "./assets/Page-Components/Main-Areas/Navbar"
import "./App.css"

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
{token && <Navbar logout = 
{logout} />}
<ModalContainer />
<Banner />
<Routes>
  <Route path="/" element = {token ? <Navigate to = "/homepage" /> : <Auth />}
  />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute 
              token={token} 
              redirectTo="/">
              <HomePage />
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
