import axios from "axios"
import { useState ,useEffect} from 'react'
import AddBountyForm from "./AddBountyForm";
import Card from "./Card";


export default function Bounties() {
  const [bountyList, setBountyList] = useState([])

  useEffect(() => {
    axios.get("/bounties")
      .then(response => setBountyList(response.data))
      .catch(error => console.log(error))
  }, [])

    
  function addBounty(newBounty){
    axios.post("/bounties", newBounty)
    .then(response => setBountyList(prevList => [...prevList, response.data]))
    .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBountyList(prevList => prevList.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }
  function editBounty(bountyId){
    axios.put(`bounties/${bountyId}`)
    .then(res => {
      setBountyList(prevList => prevList.map(bounty => bounty._id !== bountyId ? bounty: res.data))
    })
    .catch(err => console.log(err))
  }

  
   return(
    <>
      <AddBountyForm addBounty = {addBounty} />
      <div className="card-container">
        {bountyList ? <>
          {bountyList.map(bounty => <Card key = {bounty.id} {...bounty} deleteBounty = {deleteBounty} editBounty = {editBounty} /> )}
          </> : null}
      </div>
    </>
   
    )
}
  
