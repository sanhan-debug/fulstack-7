<<<<<<< HEAD
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from 'mongoose'
import { guestRouter } from './Routes/guestRouter.js'


dotenv.config()
const app = express()
const PORT = 3000 
const URI = process.env.URI


app.use(cors())
app.use(express.json())
app.use("/",guestRouter)

app.listen(PORT ,()=>{
    console.log(`server is active ${PORT} `)

    connect(URI).then(()=>console.log('connected to the mongodb'))
})


app
=======

>>>>>>> 352a2cc837950ac473fa09ebb65d2d4e469c579c
