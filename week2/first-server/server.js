const express = require("express")
const app = express()

const movieData = require("./components/movies.json")
const actorData = require("./components/actors.json")
const directorData = require("./components/directors.json")

app.get("/movies", (req, res) => {
    res.send(movieData.movies)
})
app.get("/actors", (req, res) => {
    res.send(actorData.actors)
})
app.get("/directors", (req, res) => {
    res.send(directorData.directors)
})


app.listen(9000, () => {
    console.log("the server is running on port 9000")
})