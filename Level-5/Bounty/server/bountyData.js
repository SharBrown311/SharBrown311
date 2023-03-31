const { v4: uuidv4 } = require('uuid');

//defined array to store the bounties

const bounties = 
[
  {
      "firstName": "John",
      "lastName": "Crichton",
      "isLiving": true,
      "bountyAmount": 180000,
      "Img": "https://tse1.mm.bing.net/th?_id=OIP.lpidvfI6en7UJy2niFMBxgHaF7&pid=Api&rs=1&c=1&qlt=95&w=144&h=115",
      "species": "Human",
      "_id": uuidv4()
  },
  {
      "firstName": "Scorpius",
      "isLiving": true,
      "bountyAmount": 50000,
      "species": "Sebacean/Scarran",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.XDH_kFCyF3lfmMwF1DwlswHaIk&pid=Api&rs=1&c=1&qlt=95&w=91&h=105",
      "_id": uuidv4()
  },
  {
      "firstName": "Aeryn",
      "lastName": "Sun",
      "isLiving": true,
      "bountyAmount": 80000,
      "species": "Sebacean",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.rYQe1GZPWc3Na-sVyW6vCAHaL6&pid=Api&rs=1&c=1&qlt=95&w=69&h=111",
      "_id": uuidv4()
  },
  {
      "firstName": "Ka",
      "lastName": "Dhargo",
      "isLiving": true,
      "bountyAmount": 80000,
      "species": "Luxan",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.i1wdEUhEWwOhyOkluAiCrwHaJQ&pid=Api&rs=1&c=1&qlt=95&w=95&h=119",
      "_id": uuidv4()
  },
  {
      "firstName": "Pa u Zotoh",
      "lastName": "Zhaan",
      "isLiving": false,
      "bountyAmount": 80000,
      "species": "Delvian",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.HekBUCxr44DPjuJSYrGe5gHaE8&pid=Api&rs=1&c=1&qlt=95&w=143&h=95",
      "_id": uuidv4()
  },
  {
      "firstName": "Dominar Rygel",
      "lastName": "XVI ",
      "isLiving": true,
      "bountyAmount": 80000,
      "species": "Hynerian",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.IAR-_T3dgYO-PLTRZUhzaAHaIz&pid=Api&rs=1&c=1&qlt=95&w=90&h=107",
      "_id": uuidv4()
  },
  {
      "firstName": "Chiana",
      "isLiving": true,
      "bountyAmount": 80000,
      "species": "Nebari",
      "Img": "https://tse1.mm.bing.net/th?id=OIP.HM1ImjLTJzSf0xfGXJWAgwHaLN&pid=Api&rs=1&c=1&qlt=95&w=61&h=92",
      "_id": uuidv4()
  },
  {
      "firstName": "Pilot",
      "isLiving": true,
      "bountyAmount": 80000,
      "species": "Servicer",
      "Img": "https://tse2.mm.bing.net/th?id=OIP.EUFTjrK849xrHE4rnIXX7AHaFj&pid=Api&P=0",
      "_id": uuidv4()
  },
  {
      "firstName": "Bialar",
      "lastName": "Crais",
      "isLiving": false,
      "bountyAmount": 90000,
      "species": "Sebacean",
      "Img": "https://tse2.mm.bing.net/th?id=OIP.EyUWHUUAQrqX3T6OAapykgHaHZ&pid=Api&P=0",
      "_id": uuidv4()
  }
]

// // app.get('/', (req, res) => {
// //   res.send(bounties)
// // })
// //GET route to retrieve all the bounties
// server.get("/bounty", (req, res) => {
// res.json(bounties)
// })
// //Get route to retrieve One bounty
// server.get('/bounty/:_id', (req, res) => {
//   res.send(bounties.find((bounty) => bounty._id === req.params._id))
// })
// //POST route to add a new bounty
// server.post('/bounty', (req, res) => {
//   const newBounty = req.body;
//   bounties.push(newBounty)
//   res.json(newBounty)
//   res.json({message: "Bounty successfully added with ${id}"})
// })

// //DELETE route to remove a bounty by its ID
// server.delete('/bounty/:id', (req, res) => {
//   const id = req.params.id;
//   bounties = bounties.filter(bounty => bounty.id !== id)
//   res.json({message: `Bounty with ID ${id} deleted`})
// })

// //PUT route to update a bounty by ID
// server.put('/bounty:id', (req, res) => {
//   const id = req.params.id;
//   const updatedBounty = req.body;
//   bounties = bounties.map(bounty => {
//     if(bounty.id === id){
//       return {...bounty, ...updatedBounty}
//     }
//     return bounty 
//   })
//   res.json(updatedBounty)
// })

// server.listen(port, () => {
//    console.log(`The server is listening on port ${port}`)
//  })


module.exports = bounties