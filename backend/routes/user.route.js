import express from "express";
import { deleteUser, getUserListing, test, updateUser, getUser } from "../controllers/user.controller.js";
import { VerifyToken } from "../utills/VerifyUser.js";

const router = express.Router();

router.get('/test', test);
router.post('/update/:id',VerifyToken,updateUser);
router.delete('/delete/:id',VerifyToken,deleteUser);
router.get('/listings/:id',VerifyToken, getUserListing);
router.get('/:id',VerifyToken, getUser);

export default router;