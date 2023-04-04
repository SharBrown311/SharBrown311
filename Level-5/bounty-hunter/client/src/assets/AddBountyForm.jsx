import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AddBountyForm({ onAddBounty }) {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [species, setSpecies] = useState('');
  const [bountyAmount, setBountyAmount] = useState();
  const [image, setImage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const newBounty = {
      firstName,
      lastName,
      species, 
      bountyAmount,
      image
    };

    axios.post('/bounties', newBounty)
      .then(response => {
        onAddBounty(response.data);
        setfirstName('');
        setlastName('');
        setSpecies('');
        setBountyAmount()
        setImage('')
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={firstName} onChange={(event) => setfirstName(event.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(event) => setlastName(event.target.value)} />
      <input type="text" placeholder="Species" value={species} onChange={(event) => setSpecies(event.target.value)} />
      <input type="number" placeholder="Reward Amount" value={bountyAmount} onChange={(event) => setBountyAmount(event.target.value)} />
      
      <img src = {image} onChange={(event) => setImage(event.target.value)} />
      <button type="submit">Add Bounty</button>
    </form>
  );
}

export default AddBountyForm