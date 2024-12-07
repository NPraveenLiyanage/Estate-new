import express from "express";
import { createListing, deleteListing, updateListing } from "../controllers/listing.controller.js";
import { VerifyToken } from "../utills/VerifyUser.js";

const router = express.Router();

router.post('/create', VerifyToken,createListing);  //VerifyToken use to check if the user authentication in utills
router.delete('/delete/:id',VerifyToken,deleteListing);
router.post('/update/:id',VerifyToken,updateListing);

export default router;