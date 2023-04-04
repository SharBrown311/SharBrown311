
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Bounties from '../src/assets/Bounties'
import AddBountyForm from "./assets/AddBountyForm"
function App() {
  return (
    <div className='App'>
    <h1 className='title'>Bounty Hunter</h1>
    <AddBountyForm/>
      <Bounties/>
    </div>
    )
}

export default App