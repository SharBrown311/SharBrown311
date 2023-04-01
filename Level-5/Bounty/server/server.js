const express = require("express")
const app = express()



app.use(express.json())


app.use("/bounties", require("./routes/bountiesRouter"))

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(process.env.PORT || 8000, () => console.log("Port 8000 Connected"))