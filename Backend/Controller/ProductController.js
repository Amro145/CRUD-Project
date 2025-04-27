const Products = require("../Model/Products/Product");

const createProduct = async (req, res) => {
  const product = req.body;
  if (!product) {
    res.status(400).send({ massage: "there error in product post" });
  }

  const newProduct = await new Products(product);

  try {
    await newProduct.save();
    res.status(201).send({ succes: true, massage: "Succes", newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ succes: false, massage: "There error in save product in DB" });
  }
};



const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndDelete(id);
    res.status(200).send({ succes: true, massage: "Item Deleted" });
  } catch (error) {
    res
      .status(404)
      .json({ succes: false, massage: "there error in delete item" });
  }
};
const getAllProducts = async (req, res) => {
  const products = await Products.find({});
  try {
    res.status(200).json({ succes: true, data: products });
  } catch (error) {
    res
      .status(404)
      .json({ succes: false, massage: "There Error in Get All Products" });
  }
};
const getSingleProduct = async (req, res) => {
  const {id} = req.params
  const products = await Products.findById(id);
  try {
    res.status(200).json({ succes: true, data: products });
  } catch (error) {
    res
      .status(404)
      .json({ succes: false, massage: "There Error in Get All Products" });
  }
};
const updateProduct = async (req, res) => {
  const product = await Products.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
      },
    },
    {
      new: true,
    }
  );
  if (product) {
    res.status(200).json({ succes: true, massage: "updated", data: product });
  } else {
    res.status(404).json({ succes: بشمسث, massage: "Not Found" });
  }
};
module.exports = { createProduct, deleteProduct, getAllProducts, updateProduct, getSingleProduct };
