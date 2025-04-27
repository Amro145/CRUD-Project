const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
// ==========Allow Json =========//
app.use(express.json());

var cors = require('cors')

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
// ========Conntect To db======= //
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log("Connected To DB");
  } catch {
    console.log("Falied To Connected");
  }
};
connectToDb();

// ===============server==========//
app.listen(process.env.PORT, () => {
  console.log("Running");
});


//================route=========//

app.use("/products", require("./Routes/ProductsRoute"));
