const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
// ==========Allow Json =========//
app.use(express.json());

var cors = require('cors')
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
// ========Conntect To db======= //
const connectToDb = require("./config/db");

// ========Connect To db======= //
connectToDb();

// ===============server==========//
app.listen(process.env.PORT, () => {
  console.log("Running");
});


//================route=========//

app.use("/products", require("./Routes/ProductsRoute"));
