
const express = require('express')
const server = express()
// const morgan = require('morgan')
const port = process.env.PORT || 8000


//enable JSON request body parsing
server.use(express.json())


//defined array to store the bounties
const bounties = 
[
  {
      "First_Name": "John",
      "Last_Name": "Crichton",
      "isLiving": true,
      "Bounty_Amount": 180000,
      "Img": "https://tse1.mm.bing.net/th?_id=OIP.lpidvfI6en7UJy2niFMBxgHaF7&pid=Api&rs=1&c=1&qlt=95&w=144&h=115",
      "species": "Human",
      "_id": "f9b1e46c-5a3f-4dc6-b416-da6eb3c1f5a2"
  },
  {
      "First_Name": "Scorpius",
      "isLiving": true,
      "Bounty_Amount": 50000,
      "species": "Sebacean/Scarran",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.XDH_kFCyF3lfmMwF1DwlswHaIk&pid=Api&rs=1&c=1&qlt=95&w=91&h=105",
      "_id": "26b1e621-8d0e-4115-b162-cbedf65993f0"
  },
  {
      "First_Name": "Aeryn",
      "Last_Name": "Sun",
      "isLiving": true,
      "Bounty_Amount": 80000,
      "species": "Sebacean",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.rYQe1GZPWc3Na-sVyW6vCAHaL6&pid=Api&rs=1&c=1&qlt=95&w=69&h=111",
      "_id": "939216d9-287a-477d-8a48-682344baeb13"
  },
  {
      "First_Name": "Ka",
      "Last_Name": "Dhargo",
      "isLiving": true,
      "Bounty_Amount": 80000,
      "species": "Luxan",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.i1wdEUhEWwOhyOkluAiCrwHaJQ&pid=Api&rs=1&c=1&qlt=95&w=95&h=119",
      "_id": "3dffbe56-8bb2-4765-bf88-f5ae9f4c94f1"
  },
  {
      "First_Name": "Pa u Zotoh",
      "Last_Name": "Zhaan",
      "isLiving": false,
      "Bounty_Amount": 80000,
      "species": "Delvian",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.HekBUCxr44DPjuJSYrGe5gHaE8&pid=Api&rs=1&c=1&qlt=95&w=143&h=95",
      "_id": "3447bdd9-cfbc-4d53-b1b2-09115f2d705e"
  },
  {
      "First_Name": "Dominar Rygel",
      "Last_Name": "XVI ",
      "isLiving": true,
      "Bounty_Amount": 80000,
      "species": "Hynerian",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.IAR-_T3dgYO-PLTRZUhzaAHaIz&pid=Api&rs=1&c=1&qlt=95&w=90&h=107",
      "_id": "f8136e39-f97f-4dae-afd9-ed449efb91e3"
  },
  {
      "First_Name": "Chiana",
      "isLiving": true,
      "Bounty_Amount": 80000,
      "species": "Nebari",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.HM1ImjLTJzSf0xfGXJWAgwHaLN&pid=Api&rs=1&c=1&qlt=95&w=61&h=92",
      "_id": "b4a9330a-d994-4f24-8957-cf5124b6b062"
  },
  {
      "First_Name": "Pilot",
      "isLiving": true,
      "Bounty_Amount": 80000,
      "species": "Servicer",
      "Img": "https://tse2.mm.bing.net/th?id=OIP.EUFTjrK849xrHE4rnIXX7AHaFj&pid=Api&P=0",
      "_id": "3b75c461-a421-47d8-a586-eef243a22da6"
  },
  {
      "First_Name": "Bialar",
      "Last_Name": "Crais",
      "isLiving": false,
      "Bounty_Amount": 90000,
      "species": "Sebacean",
      "Img": "https://tse2.mm.bing.net/th?id=OIP.EyUWHUUAQrqX3T6OAapykgHaHZ&pid=Api&P=0",
      "_id": "ff455b64-631f-48e8-98ab-5cd03e3c80fd"
  }
]

// app.get('/', (req, res) => {
//   res.send(bounties)
// })
//GET route to retrieve all the bounties
server.get("/bounty", (req, res) => {
res.json(bounties)
})
//Get route to retrieve One bounty
server.get('/bounty/:_id', (req, res) => {
  res.send(bounties.find((bounty) => bounty._id === req.params._id))
})
//POST route to add a new bounty
server.post('/bounty', (req, res) => {
  const newBounty = req.body;
  bounties.push(newBounty)
  res.json(newBounty)
  res.json({message: "Bounty successfully added with ${id}"})
})

//DELETE route to remove a bounty by its ID
server.delete('/bounty/:id', (req, res) => {
  const id = req.params.id;
  bounties = bounties.filter(bounty => bounty.id !== id)
  res.json({message: `Bounty with ID ${id} deleted`})
})

//PUT route to update a bounty by ID
server.put('/bounty:id', (req, res) => {
  const id = req.params.id;
  const updatedBounty = req.body;
  bounties = bounties.map(bounty => {
    if(bounty.id === id){
      return {...bounty, ...updatedBounty}
    }
    return bounty 
  })
  res.json(updatedBounty)
})

server.listen(port, () => {
   console.log(`The server is listening on port ${port}`)
 })