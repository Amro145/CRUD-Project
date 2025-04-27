const express = require("express");
const Route = express.Router();
const mongoose = require("mongoose");
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  getSingleProduct,
} = require("../Controller/ProductController");

/**
 * @desc "create Product "
 * @route /products/createProduct
 * @method POST
 * @access public
 */

Route.post("/createProduct", createProduct);
/**
 * @desc "get single Product "
 * @route /:id
 * @method get
 * @access public
 */

Route.get("/:id", getSingleProduct);

/**
 * @desc "Delet Product "
 * @route /products/:id
 * @method DELET
 * @access public
 */

Route.delete("/:id", deleteProduct);

/**
 * @desc "get All Products "
 * @route /products/
 * @method GET
 * @access public
 */
Route.get("/", getAllProducts);

/**
 * @desc "update product "
 * @route /products/:id
 * @method PUT
 * @access public
 */

Route.put("/:id", updateProduct);

module.exports = Route;
