import express from "express";
import itemModel from "../models/ItemModel.js";
import customerModel from "../models/CustomerModel.js";

const router = express.Router();

router.get("/items", async (req, res) => {
    try{
        let finding = await itemModel.find({});
    res.status(201).send(finding);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

router.get("/customers/:id/orders", async (req, res) => {
    try{
        let user = await customerModel.find({_id: req.params.id}).populate(order);
        res.status(201).send(user);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

router.patch("/orders/:id/status", async (req, res) => {
    try{
        let updated = await itemModel.findOne({_id: req.params.id}, {itemName: "kuch bhi"}, {new: true});
        res.status(201).send(updated);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

router.delete("/orders/:id", async (req, res) => {
    try{
        let deleting = await itemModel.findOneAndDelete({_id: req.params.id});
        res.status(201).send(deleting);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

export default router;