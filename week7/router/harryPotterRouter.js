const express = require("express")
const harryPotterRouter = express.Router()
const uuid = require("uuid")

const students = [
    {
        fName: "Fred",
        lName: "Weasley",
        house: "Gryffindor",
        year: 4,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "apparition", "ghoul studies"],
        _id: uuid.v4()
    },{
        fName: "George",
        lName: "Weasley",
        house: "Gryffindor",
        year: 4,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "apparition", "ghoul studies"],
        _id: uuid.v4()
    },{
        fName: "Ron",
        lName: "Weasley",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "muggle studies", "divination"],
        _id: uuid.v4()
    },{
        fName: "Ginny",
        lName: "Weasley",
        house: "Gryffindor",
        year: 1,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "flying"],
        _id: uuid.v4()
    },{
        fName: "Luna",
        lName: "Lovegood",
        house: "RavenClaw",
        year: 1,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "flying"],
        _id: uuid.v4()
    },{
        fName: "Neville",
        lName: "Longbottom",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "care of magical creatures", "divination"],
        _id: uuid.v4()
    },{
        fName: "Cedric",
        lName: "Diggory",
        house: "Slytherin",
        year: 5,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "magical theory", "ancient studies"],
        _id: uuid.v4()
    },{
        fName: "Hermione",
        lName: "Granger",
        house: "Ravenclaw",
        year: 2,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "study of ancient runes", "care of magical creatures"],
        _id: uuid.v4()
    },{
        fName: "Harry",
        lName: "Potter",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: true,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "arithmancy", "study of ancient runes"],
        _id: uuid.v4()
    },{
        fName: "Draco",
        lName: "Malfoy",
        house: "Slytherin",
        year: 2,
        quidditchTeam: true,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "arithmancy", "divination"],
        _id: uuid.v4()
    },
]

harryPotterRouter.get("/", (req, res) => {
    res.send(students)
})
harryPotterRouter.get("/:studentID", (req, res) => {
    const studentID = req.params.studentID
    const selectStudent = students.find(s => s._id === studentID)
    res.send(selectStudent)
})
harryPotterRouter.post("/", (req, res) => {
    const newStudent = req.body
    newStudent._id = uuid.v4()
    students.push(newStudent)
    res.send(newStudent)
})
harryPotterRouter.delete("/:studentID", (req, res) => {
    const studentID = req.params.studentID
    const studentIndex = students.findIndex(s => s._id === studentID)
    students.splice(studentIndex, 1)
    res.send("Student successfully removed")
})
harryPotterRouter.put("/:studentID", (req, res) => {
    const studentID = req.params.studentID
    const updateObj = req.body
    const studentIndex = students.findIndex(s => s._id === studentID)
    const updatedStudent = Object.assign(students[studentIndex], updateObj)
    res.send(updatedStudent)
})

module.exports = harryPotterRouter