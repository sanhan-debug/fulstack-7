import { Router } from "express";
import { addGuest, deleteById, getAllGuests, getGuestById, updateById } from "../Controllers/guestController.js";


export const guestRouter = new Router()

guestRouter.get("/guests",getAllGuests)
guestRouter.get("/guests/:id",getGuestById)
guestRouter.post("/guests",addGuest)
guestRouter.delete("/guests:id",deleteById)
guestRouter.put("/guests/:id",updateById)

