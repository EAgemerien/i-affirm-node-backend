import asyncHandler from '../middlewares/asyncHandler.js'
import userModel from '../models/user.models.js'
import Response from '../utils/response.js';

const createUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    console.log(req.body)
    try {
        const result = await userModel.createUser({username, email, password});
        res.status(201).send(new Response(201, 'CREATED', 'User Created', result));
    } catch (error) {
        console.log("Error occured", error);
        throw error;
    }
});

const getAllUsers = asyncHandler(async(req, res) =>{
    try {
        const result = await userModel.getAllUsers()
        console.log(result)
        res.status(200).send(new Response(200, 'OK', 'Got the data', result))
    } catch (error) {
        console.log("Error occured", error);
        throw error;
    }
})

const getUserByID = asyncHandler(async(req, res) => {
    const id = req.params.id;
    try {
        const result = await userModel.getUserById(id)
        if(!result){
            res.status(404).send(new Response(404, 'NOT FOUND', 'No data'));
        }else{
            res.status(200).send(new Response(200, 'OK', 'Found data', result));
        }
    } catch (error) {
        console.log("Error occured", error);
        throw error;
    }
});

const getUserByUsername = asyncHandler(async(req, res) => {
    const name = req.params.username;
    console.log(name)
    try {
        const result = await userModel.getUserByUsername(name)
        if(!result){
            res.status(404).send(new Response(404, 'NOT FOUND', 'No data'));
        }else{
            res.status(200).send(new Response(200, 'OK', 'Found data', result));
        }
        
    } catch (error) {
        console.log("Error occured", error);
        throw error;
    }
})

const updateUser = asyncHandler(async(req, res) => {
    const id = req.params.id;
    try {
        const result = await userModel.updateUser(id, req.body);
        res.status(200).send(new Response(200, 'OK', 'Updated User info', result))
    } catch (error) {
        console.log("Error occured", error);
        throw error;
    }
})

const deleteUser = asyncHandler(async(req, res) => {
    const id = req.params.id;
    try {
        await userModel.deleteUser(id)
        res.status(200).send(new Response(200, 'OK', 'Deleted successfully'))
    } catch (error) {
        console.log("Error occured", error);
        throw error;
    }
})

export { createUser, getAllUsers, getUserByID, getUserByUsername, updateUser, deleteUser }