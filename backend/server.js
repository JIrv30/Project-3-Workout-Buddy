require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require('cors')

//express app
const app = express()

//middleware to log requests to console
app.use(express.json())

app.use(cors())

app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next()
})


//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for request
    app.listen(process.env.PORT,()=>{
    console.log('connected to DB & listening on port', process.env.PORT)
})
  })
  .catch((error)=>{
    console.log(error)
  })




