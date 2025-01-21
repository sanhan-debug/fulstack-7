import { guestModel } from "../Model/productModel.js";


let addGuest = async (req, res) => {
    try {
        let newGuest = await guestModel.create(req.body)
        res.send(newGuest).status(200)
    } catch (err) {
        console.error("add guest error", err)
        res.send("error add guest ").status(500)
    }
}


let getAllGuests = async (req, res) => {
    try {
        let guests = await guestModel.find()
        res.send(guests).status(200)
    } catch (err) {
        console.error("get all guest error", err)
        res.send("error get all guests ").status(500)
    }
}


let getGuestById = async (req, res) => {
    try {
        let guest = await guestModel.findById(req.params.id)
        res.send(guest).status(200)
    } catch (err) {
        console.error("get guest  by id error", err)
        res.send(" get guest by id erroe ").status(500)
    }
}


let deleteById = async (req, res) => {
    try {
        await guestModel.findByIdAndDelete(req.params.id)
        res.send({ message: "deleted  element" }).status(200)
    } catch (err) {
        console.error("deleete guest  by id error", err)
        res.send(" delete guest by id erroe ").status(500)
    }
}

let updateById = async (req, res) => {
    try {
        let updatedGuest = await guestModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({ message: "updated successfully " ,updatedGuest}).status(200)
    } catch (err) {
        console.error("update guest  by id error", err)
        res.send(" update guest by id erroe ").status(500)
    }
}



export { addGuest, getAllGuests, getGuestById, deleteById,updateById }