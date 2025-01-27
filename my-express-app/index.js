const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

app.use(express.json());
dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to mogodb succefully"))
.catch((err)=>console.log(err));



app.use("/api/user",userRoute);
app.listen(9000,()=>{
    console.log("backend is runing")
});
