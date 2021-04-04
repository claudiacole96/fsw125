const express = require("express")
const inventoryRouter = express.Router()
const uuid = require("uuid")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid.v4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid.v4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid.v4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid.v4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid.v4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid.v4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid.v4()
    },
]

// get all ... /inventory
inventoryRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

// get by type ... /inventory/search/type
inventoryRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    console.log(req)
    console.log(req.query)
    const filteredInventory = inventoryItems.filter(i => i.type === type)
    res.send(filteredInventory)
})

// get one item ... /inventory/:id
inventoryRouter.get("/:inventoryItemId", (req, res) => {
    const inventoryItemId = req.params.inventoryItemId
    const singleItem = inventoryItems.find(i => i._id === inventoryItemId)
    res.send(singleItem)
})

module.exports = inventoryRouter