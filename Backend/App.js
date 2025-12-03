const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();

// ========== Security Middleware =========//
app.use(helmet());

// ==========Allow Json =========//
app.use(express.json());

const cors = require('cors');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ========Conntect To db======= //
const connectToDb = require("./config/db");

// ========Connect To db======= //
connectToDb();

// ===============server==========//
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server running on port ${PORT}`);
  }
});


//================route=========//

app.use("/products", require("./Routes/ProductsRoute"));

// Export the app for Vercel
module.exports = app;
