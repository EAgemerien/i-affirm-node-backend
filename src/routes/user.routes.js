import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByID, getUserByUsername, updateUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.route('/users/')
    .post(createUser)
    .get(getAllUsers)

userRouter.route('/users/:id')
    .get(getUserByID)
    .put(updateUser)
    .delete(deleteUser)

userRouter.get('/users/user/:username', getUserByUsername)

export default userRouter;