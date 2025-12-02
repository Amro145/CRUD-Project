import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import api from "../../api";

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
    return true;
  };
  const handleAddProduct = async () => {
    if (!valid()) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("price", product.price);
      formData.append("image", product.image);
      await api.post("/products/createProduct", formData);

      toast.success("Successfully Added!");
      setProduct({ title: "", price: "", image: "" });
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product.");
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
              type="file"
              id="image"
              placeholder="Enter Product Src"
              onChange={(e) =>
                setProduct({ ...product, image: e.target.files[0] })
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
