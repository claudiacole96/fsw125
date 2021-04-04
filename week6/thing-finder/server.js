const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/inventory", require("./router/inventoryRouter"))

app.listen(9000, () => {
    console.log("The server is running on 9000")
})