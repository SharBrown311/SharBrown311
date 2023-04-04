


import axios from "axios"
import React, { useState ,useEffect} from 'react'
import bounty from "../../../server/models/bounty";



function Bounties() {
  const [bountyList, setBountyList] = useState()


  useEffect(() => {
    axios.get('/bounties')
      .then(response => {
        setBountyList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
    





  //  useEffect(() => {
  //    getBounties()
  //  }, [])

  
   return(
    <>
      <div className="bounty-container">
        {bountyList ? <>
          {bountyList.map(bounty => <div key={bounty._id}  />)}{bounty}
          </> : null }
      </div>
    </>
   
    )
}
  
  
  
    export default Bounties
  
  
  
  
  
  
  
  
  
  
  // function getBounties() {
  //   axios.get("/bounties")
  //     .then(res => setBountyList(res.data))
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   getBounties()
  // }, [])


  // function addBounty(newBounty) {
  //   axios.post("/bounties", newBounty)
  //     .then(res => setBountyList(prevList => [...prevList, res.data]))
  //     .catch(err => console.log(err))
  // }



  // function deleteBounty(bountyId) {
  //   axios.delete(`/bounties/${bountyId}`)
  //     .then(res =>
  //       setBountyList(prevList => prevList.filter(item => item._id !== bountyId)))
  //     .catch(err => console.log(err))
  // }


  // function editBounty(updates, bountyId) {
  //   axios.put(`/bounties/${bountyId}`, updates)
  //     .then(res => {
  //       setBountyList(prevList => prevList.map(item => item._id !== bountyId ? item : res.data))
  //     })
  //     .catch(err => console.log(err))
  // }

  // return (
  //   <div className='form-container'>
  //   <Form addBounty = {addBounty}/>
  //   <div className='card-container'>
  //     {bountyList ? 
  //       <div>
  //       {bountyList.map(item => 
  //         <Card key = {item._id} {...item} deleteBounty = {deleteBounty} editBounty = {editBounty} />)}
  //       </div> : null}
  //     </div>
  //     </div>
  // )

