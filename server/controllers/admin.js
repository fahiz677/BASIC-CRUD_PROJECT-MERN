import express from 'express';
import mongoose from 'mongoose';
import UserModal from "../models/user.js";

const router = express.Router();


export const getUsersList = async (req, res) => { 

    try {
        const usersList = await UserModal.find();
        
        res.status(200).json(usersList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}






export default router;