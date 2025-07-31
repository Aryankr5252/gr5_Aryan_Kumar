import express from "express";
import itemModel from "../models/ItemModel.js";


const router = express.Router();

router.post("/items", async (req, res) => {
    try {
        let { price, itemName } = req.body;
        let createitem = await itemModel.create({
            price,
            itemName
        })
        res.status(201).send(createitem);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
    
})


export default router;