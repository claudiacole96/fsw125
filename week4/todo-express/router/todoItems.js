const express = require("express")
const todoItems = express.Router()
const uuid = require("uuid")

const todos = [
    {
        title: "Attend brithday party",
        description: "Birthday party for seven year old on Saturday, April 3rd",
        imageUrl: "https://www.sgvtribune.com/wp-content/uploads/2019/03/iStock-999985068-1.jpg",
        completed: false,
        _id: uuid.v4()
    }
]

//get all
todoItems.get("/", (req, res) => {
    res.send(todos)
})
//get one
todoItems.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const selectTodo = todos.find(b => b._id === todoId)
    res.send(selectTodo)
})
//post one
todoItems.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid.v4()
    todos.push(newTodo)
    res.send(`${newTodo.title} was succesfully added to your list!`)
})
//delete one
todoItems.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(b => b._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Todo sucessfully deleted")
})
//update/change/put method
todoItems.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(b => b._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})

module.exports = todoItems