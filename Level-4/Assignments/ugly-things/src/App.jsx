import './App.css';
import Form from "./assets/Form"
import UglyArray from "./assets/UglyArray"
import { FormContextProvider } from "./assets/formContext"
import { ListContextProvider } from "./assets/listContext"

function App() {
  return (
    <>

      <ListContextProvider>
        <FormContextProvider>
          <Form />
        </FormContextProvider>
        <UglyArray />
      </ListContextProvider>
    </>
  )
}

export default App;