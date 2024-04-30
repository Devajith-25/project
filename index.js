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
//api for login
app.post('/login',(req,res)=>{
    const{email,epass}=req.body;
     foodModel.findOne({email :email})
     .then(user =>{
        if(user){
            if(user.epass === epass){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("no data exited")
        }
       
     })
   
})


// 4. port
app.listen(3006,()=>{
    console.log("port 3006 is up and running")
})