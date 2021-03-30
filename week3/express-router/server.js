const express = require("express")
const app = express()
const uuid = require("uuid")

app.use(express.json())

const bounties = [
    {
        fName: "Obi-wan",
        lName: "Kenobi",
        living: false,
        bountyAmount: 5000,
        type: "jedi",
        _id: uuid.v4()
    }
]

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(`${newBounty.fName} ${newBounty.lName} was succesfully added to the Bounty List!`)
})

app.listen(9000, () => {
    console.log("The server is running on 9000")
})