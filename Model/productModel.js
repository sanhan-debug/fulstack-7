import { Schema,model } from "mongoose";

const guestSchema = new Schema({
    name:String,
    description:String,
    image:String
},{
    versionKey:false,
})


export const guestModel = model("guests",guestSchema)