import React from 'react'
import {useState, useEffect} from 'react'
import Card from './Card'
import axios from 'axios'
import Form from './Form'
function Bounties() {
  const [bountyList, setBountyList] = useState()

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBountyList(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])


  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res => setBountyList(prevList => [...prevList, res.data]))
      .catch(err => console.log(err))
  }



  function deleteBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res =>
        setBountyList(prevList => prevList.filter(item => item._id !== bountyId)))
      .catch(err => console.log(err))
  }


  function editBounty(updates, bountyId) {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => {
        setBountyList(prevList => prevList.map(item => item._id !== bountyId ? item : res.data))
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    <Form addBounty = {addBounty}/>
    <div className='card-container'>
      {bountyList ? 
        <div>
        {bountyList.map(item => <Card key = {item._id} {...item} deleteBounty = {deleteBounty} editBounty = {editBounty} />)}
        </div> : null}
      </div>
      </>
  )
}

export default Bounties