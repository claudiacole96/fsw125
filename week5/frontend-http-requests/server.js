const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/bounties", require("./router/bountiesRouter"))

app.listen(9000, () => {
    console.log("The server is running on 9000")
})