const express = require("express")
const app = express()
const morgan = require("morgan")
const mysql = require('mysql')

app.use(express.json())
app.use(morgan("dev"))

//making a connection to mysql db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zaudia795',
    //default connection to newly created db
    database: 'harrypotter'
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('MySQL Database Connection Established Succeffully');
});

//create db
app.get('/CreateDB', (req, res) => {
    let SQL = 'CREATE DATABASE harrypotter';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('harrypotter db createed successfully!');
    });
});

//create new table
app.get('/CreateTable', (req, res) => {
    let SQL = 'CREATE TABLE students (id int auto_increment, fname varchar(25), lname varchar(25), house varchar(25), imgUrl varchar(250), year int, quidditchTeam int default (0), primary key(id) )';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('students table was createed successfully!');
    });
});

//execute insert query
app.post('/InsertStudent', (req, res) => {
    console.log(req.body)
    let postVariables = req.body
    let SQL = 'INSERT INTO students set ?';
    db.query(SQL, postVariables, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('first row inserted successfully!');
    });
});

//execute select query
app.get('/GetStudents', (req, res) => {
    let SQL = 'SELECT * FROM students';
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result);
    });
});

//execute select query w/ where clause
app.get('/GetStudent/:id', (req, res) => {
    let SQL = `SELECT * FROM students where id = ${req.params.id}`;
    db.query(SQL, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('select query with where clause executed successfully');
    });
});

//update with a where clause
app.put('/UpdateStudentQuidditch/:id', (req, res) => {
    let SQL = `update students set quidditchTeam = 1 where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('update query to change quidditch team member with where clause executed successfully')
    });
});

app.put('/UpdateStudent/:id', (req, res) => {
    console.log(req.body)
    let postVariables = req.body
    let SQL = `UPDATE students set ? where id = ${req.params.id}`;
    db.query(SQL, postVariables, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send('student updated successfully!');
    });
});

//delete query with where clause
app.delete('/DeleteStudent/:id', (req, res) => {
    let SQL = `delete from students where id = ${req.params.id}`
    db.query(SQL, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('delete query executed successfully')
    });
});

app.listen(4000, () => {
    console.log("The server is running on 4000")
})