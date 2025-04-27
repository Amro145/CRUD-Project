import { Box, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdatePage() {
  const [update, setUpdate] = useState({
    title: "",
    price: "",
    image: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const data = await response.json();
        setUpdate(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  const valid = () => {
    if (!update.title || !update.price || !update.image) {
      toast.error("Please fill all fields");
      return false;
    }
    if (isNaN(update.price)) {
      toast.error("Price must be a number");
      return false;
    }
    if (update.price <= 0) {
      toast.error("Price must be greater than zero");
      return false;
    }
    if (!update.image.startsWith("http")) {
      toast.error("Image URL must start with http or https");
      return false;
    }
    return true;
  };

  const handleUpdate2 = async () => {
    if (!valid()) {
      return;
    }
    try {
      await axios({
        method: "put",
        url: `http://localhost:3001/products/${id}`,
        data: {
          title: update.title,
          price: update.price,
          image: update.image,
        },
      });
      toast.success("Successfully update!");
    } catch (err) {
      console.log(err);
      toast.error("Please Out fill.");
    }
  };
  //   handleUpdate2();
  return (
    <Box marginY={5}>
      <div className="flex justify-center align-middle">
        <form className="flex flex-col justify-around h-52">
          <div className="flex justify-center ">
            <h1> Update Product</h1>
          </div>
          <div className="mb-14 w-96">
            <Input
              type="text"
              id="title"
              placeholder="Enter Updated Title"
              value={update.title}
              onChange={(e) => setUpdate({ ...update, title: e.target.value })}
            />
          </div>
          <div className="mb-6 w-96">
            <Input
              type="number"
              id="price"
              placeholder="Enter updated Price "
              value={update.price}
              onChange={(e) => setUpdate({ ...update, price: e.target.value })}
            />
          </div>
          <div className="mb-10 w-96">
            <Input
              type="text"
              id="image"
              placeholder="Enter update Src"
              value={update.image}
              onChange={(e) => setUpdate({ ...update, image: e.target.value })}
            />
          </div>
          <Button onClick={handleUpdate2}>Update</Button>
        </form>
      </div>
    </Box>
  );
}

export default UpdatePage;
