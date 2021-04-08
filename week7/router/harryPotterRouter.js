const express = require("express")
const harryPotterRouter = express.Router()
const uuid = require("uuid")

const students = [
    {
        fName: "Ron",
        lName: "Weasley",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "muggle studies", "divination"],
        _id: uuid.v4()
    },{
        fName: "Ginny",
        lName: "Weasley",
        imgUrl: "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/b/40/b402a776-942a-11e3-b3c3-0017a43b2370/52fbe468ec796.image.jpg",
        house: "Gryffindor",
        year: 1,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "flying"],
        _id: uuid.v4()
    },{
        fName: "Luna",
        lName: "Lovegood",
        imgUrl: "https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg",
        house: "Ravenclaw",
        year: 1,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "flying"],
        _id: uuid.v4()
    },{
        fName: "Neville",
        lName: "Longbottom",
        imgUrl: "https://img.wattpad.com/cbad8532687a39859008962baed2a7739b2839e1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6e316e324d666a6a4935694e513d3d2d3634323039323134332e313535643361373336373535363131633331323630353939303930312e706e67?s=fit&w=720&h=720",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "care of magical creatures", "divination"],
        _id: uuid.v4()
    },{
        fName: "Cedric",
        lName: "Diggory",
        imgUrl: "http://images2.fanpop.com/images/photos/6500000/The-four-champions-goblet-of-fire-6579635-1476-2100.jpg",
        house: "Hufflepuff",
        year: 5,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "magical theory", "ancient studies"],
        _id: uuid.v4()
    },{
        fName: "Hermione",
        lName: "Granger",
        imgUrl: "https://www.nypl.org/sites/default/files/hermione.jpg",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: false,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "study of ancient runes", "care of magical creatures"],
        _id: uuid.v4()
    },{
        fName: "Harry",
        lName: "Potter",
        imgUrl: "https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
        house: "Gryffindor",
        year: 2,
        quidditchTeam: true,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "arithmancy", "study of ancient runes"],
        _id: uuid.v4()
    },{
        fName: "Draco",
        lName: "Malfoy",
        imgUrl: "https://i.pinimg.com/736x/11/c5/a3/11c5a3dc93a313731e411fc0baf3e109.jpg",
        house: "Slytherin",
        year: 2,
        quidditchTeam: true,
        //classes: ["transfiguration", "charms", "potions", "history of magic", "defence against the dark arts", "astronomy", "herbology", "arithmancy", "divination"],
        _id: uuid.v4()
    },
]

harryPotterRouter.get("/", (req, res) => {
    res.status(200).send(students)
})
harryPotterRouter.get("/:studentID", (req, res) => {
    const studentID = req.params.studentID
    const selectStudent = students.find(s => s._id === studentID)
    res.status(200).send(selectStudent)
})
harryPotterRouter.post("/", (req, res) => {
    const newStudent = req.body
    newStudent._id = uuid.v4()
    students.push(newStudent)
    res.status(201).send(newStudent)
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
    res.status(201).send(updatedStudent)
})
harryPotterRouter.get("/search/house", (req, res) => {
    const house = req.query.house
    if (house === "All") {
        res.status(200).send(students)
    } else {
        const filteredStudents = students.filter(s => s.house === house)
        res.status(200).send(filteredStudents)
    }
})

module.exports = harryPotterRouter