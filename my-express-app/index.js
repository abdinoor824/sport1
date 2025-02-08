const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

const PORT = process.env.PORT || 10000;

app.use(express.json());
dotenv.config();
// app.use(cors({
//     origin: 'https://sport1-16455.onrender.com',
//   }));
  app.use(cors({
    origin: 'http://localhost:10001', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Allow these methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these headers
  }));
mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to mogodb succefully"))
.catch((err)=>console.log(err));



app.use("/api/user",userRoute);
app.listen(PORT,()=>{
    console.log("backend is runing")
});
