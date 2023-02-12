import {useState} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from './components/Footer'
import lightbulbOff from './images/lightbulbOff.png'
import lightbulbOn from './images/lightbulbOn.png'
import {ThemeContext} from "./components/ThemeContext";
import './App.css'


function App(props){
  console.log("props:" , props)
  const [color, setColor] = useState('dark')
  const [image , setImage] = useState(lightbulbOff)
  const toggleTheme = () =>{
    setColor(prevColor => prevColor === "dark" ? "light" : "dark"),
    setImage(prevImage  => prevImage === lightbulbOff ? lightbulbOn  : lightbulbOff) 
  }
  return(
    <>
      <ThemeContext.Provider value  = {{
        color: color, 
        image: image, 
        toggleTheme: toggleTheme, 
        }}>
      <Navbar/>
      <Main />
      <Footer />
      </ThemeContext.Provider>
    </>
  )
}
export default App