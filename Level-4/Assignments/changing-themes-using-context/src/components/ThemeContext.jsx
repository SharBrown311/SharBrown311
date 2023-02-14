import React, {useState} from "react"
import lightbulbOn from '../images/lightbulbOn.png'
import lightbulbOff from '../images/lightbulbOff.png'
const ThemeContext = React.createContext()

function ThemeContextProvider(props){ 
    
    const [color, setColor] = useState("dark")
    const [image, setImage] = useState('lightbulbOff')
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
        setImage(prevImage =>prevImage === lightbulbOff ? lightbulbOn : lightbulbOff)
    }
    console.log(props.children)
    return(
        <ThemeContext.Provider value={{
            color: color, 
            image: image, 
            toggleTheme: toggleTheme,
          }}>
           {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}