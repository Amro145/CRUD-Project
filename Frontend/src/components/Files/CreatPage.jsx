import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import Axios from "axios";
import toast from "react-hot-toast";

function CreatePage() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  });
  const valid = () => {
    if (!product.title || !product.price || !product.image) {
      toast.error("Please fill all fields");
      return false;
    }
    if (isNaN(product.price)) {
      toast.error("Price must be a number");
      return false;
    }
    if (product.price <= 0) {
      toast.error("Price must be greater than zero");
      return false;
    }
    if (
      !product.image.startsWith("http") ||
      !product.image.startsWith("https")
    ) {
      toast.error("Image URL must start with http or https");
      return false;
    }
    return true;
  };
  const handleAddProduct = async () => {
    if (!valid()) {
      return;
    }
    try {
      await Axios.post("http://localhost:3001/products/createProduct", {
        title: product.title,
        price: product.price,
        image: product.image,
      });

      toast.success("Successfully Add!");
      setProduct({ title: "", price: "", image: "" });
    } catch (error) {
      console.error("Please Out fill:", error);
      toast.error("Please Out fill.");
    }
  };

  return (
    <Box marginY={5}>
      <div className="flex justify-center align-middle">
        <form className="flex flex-col justify-around h-52">
          <div className="flex justify-center ">
            <h1>create New Product</h1>
          </div>
          <div className="mb-14 w-96 bg-black">
            <Input
              type="text"
              id="title"
              placeholder="Enter Product Title"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </div>
          <div className="mb-6 w-96 bg-black">
            <Input
              type="number"
              id="price"
              placeholder="Enter Product Price "
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div className="mb-10 w-96 bg-black ">
            <Input
              type="text"
              id="image"
              placeholder="Enter Product Src"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
          </div>
          <Button onClick={handleAddProduct}>Add Product</Button>
        </form>
      </div>
    </Box>
  );
}

export default CreatePage;
