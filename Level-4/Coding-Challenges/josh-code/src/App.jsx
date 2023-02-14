import {useState} from 'react'
import Header from './assets/Header'
import Button from './assets/Button'
import {ThemeContext} from './assets/ThemeContext'
import './App.css'


function App(props) {
 console.log('props: ', props)
  const [color, setColor] = useState('light')
  const toggleTheme = () =>{
    setColor(prevColor => prevColor === 'light' ? "dark" : "light")
  }
  return (
    <>
{/* provider component takes a value prop to pass down what every data */}
    <ThemeContext.Provider value = {{
      color: color, 
      toggleTheme: toggleTheme
    }}>
      <Header />
      <Button />
    </ThemeContext.Provider>
    </>
  )
}

export default App