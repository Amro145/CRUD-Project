const Products = require("../Model/Products/Product");
const cloudinary = require('cloudinary').v2;

const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.title || !product.price) {
    return res.status(400).send({ success: false, message: "Please provide all fields" });
  }

  if (req.file) {
    try {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path);
      product.image = uploadResponse.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(500).json({ success: false, message: "Image upload failed" });
    }
  }

  try {
    const newProduct = new Products(product);
    await newProduct.save();
    res.status(201).send({ success: true, message: "Success", newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, message: "Error saving product in DB" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndDelete(id);
    res.status(200).send({ success: true, message: "Item Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting item" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    // console.error("Error getting products:", error);
    res.status(500).json({ success: false, message: "Error getting all products" });
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    // console.error("Error getting single product:", error);
    res.status(500).json({ success: false, message: "Error getting product" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = {
    title: req.body.title,
    price: req.body.price,
  };

  if (req.file) {
    try {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path);
      updates.image = uploadResponse.secure_url;
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(500).json({ success: false, message: "Image upload failed" });
    }
  } else if (req.body.image) {
    // If image is a string (URL) and not a file, keep it
    updates.image = req.body.image;
  }

  try {
    const product = await Products.findByIdAndUpdate(
      id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );
    if (product) {
      res.status(200).json({ success: true, message: "Updated", data: product });
    } else {
      res.status(404).json({ success: false, message: "Not Found" });
    }
  } catch (error) {
    // console.error("Error updating product:", error);
    res.status(500).json({ success: false, message: "Error updating product" });
  }
};

module.exports = { createProduct, deleteProduct, getAllProducts, updateProduct, getSingleProduct };
