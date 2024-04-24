// 1. importing the express
const express = require('express')

const foodModel = require("./model")
const feedbackModel = require("./feed")

const cors = require('cors')
const { await } = require('react-router-dom')
// 2 initialization
const app = new express()



// middileware || parsing the parameter

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

//api creation
app.post('/create',async(req,res)=>{
    var result = await new foodModel(req.body)
    result.save()
    res.send("you are signed in")
})

//api creation for feedback
app.post('/create1',async(req,res)=>{
    var result = await new feedbackModel(req.body)
    result.save()
    res.send("your response saved")
})



// 4. port
app.listen(3006,()=>{
    console.log("port 3006 is up and running")
})



