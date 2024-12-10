import express from "express";
import { createListing, deleteListing, updateListing, getListing, getListings } from "../controllers/listing.controller.js";
import { VerifyToken } from "../utills/VerifyUser.js";

const router = express.Router();

router.post('/create', VerifyToken,createListing);  //VerifyToken use to check if the user authentication in utills
router.delete('/delete/:id',VerifyToken,deleteListing);
router.post('/update/:id',VerifyToken,updateListing);
router.get('/get/:id',getListing);
router.get('/get', getListings);

export default router;