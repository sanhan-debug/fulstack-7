import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from 'mongoose'
import { guestRouter } from './Routes/guestRouter.js'

// mongodb+srv://sanhan:sanhan2006@guests.mhjy0.mongodb.net/?retryWrites=true&w=majority&appName=guests

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



