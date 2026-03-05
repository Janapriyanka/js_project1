const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "priyanka",   // change if your MySQL has password
    database: "registration_db"
})

db.connect((err)=>{
    if(err){
        console.log("Database connection failed")
        console.log(err)
    }else{
        console.log("Connected to MySQL")
    }
})

// Register API
app.post("/register",(req,res)=>{

const {name,email,password} = req.body

const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)"

db.query(sql,[name,email,password],(err,result)=>{
    if(err){
        console.log(err)
        res.send("Error inserting data")
    }else{
        res.send("User registered successfully")
    }
})

})

// Server start
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})