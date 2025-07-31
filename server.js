import express from "express";
import { dbconnect } from "./config/dbconnect.js";
import dotenv from "dotenv";
dotenv.config();

import customerRouter from "./routes/customerRouter.js"
import adminRouter from "./routes/adminRouter.js";

const app = express();
app.use(express.json());

const port = 4000;


dbconnect();

app.use("/api/", customerRouter);
app.use("/api/admin", adminRouter);

app.listen(port,() => {
    console.log(`The server is running in ${port}`);
});