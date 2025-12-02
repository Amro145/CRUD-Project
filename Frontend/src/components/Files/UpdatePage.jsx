import { Box, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import api from "../../api";
import { useNavigate } from "react-router-dom";

function UpdatePage() {
  const navigate = useNavigate();
  const [update, setUpdate] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [oldImage, setOldImage] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setUpdate(response.data.data);
        setOldImage(response.data.data.image);
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

    return true;
  };

  const handleUpdate = async () => {
    if (!valid()) {
      return;
    }
    try {
      const Update = new FormData();
      Update.append("title", update.title);
      Update.append("price", update.price);
      Update.append("image", update.image);
      await api.put(`/products/${id}`, Update);
      toast.success("Successfully updated!");
      navigate("/");
    } catch (err) {
      // console.error(err);
      toast.error("Failed to update.");
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
              type="file"
              id="image"
              onChange={(e) => {
                setUpdate({ ...update, image: e.target.files[0] })
                setOldImage(null)
              }
              }
            />
          </div>
          {
            oldImage ? (
              <div className="mb-10 w-96 p-5  max-h-52  relative  my-5 bg-black ">
                <div className="flex justify-center items-center">
                  <img src={oldImage} className="max-h-52 max-w-52 cover" alt="Product" />
                </div>
              </div>
            ) :
              update.image && oldImage === null && (
                <div className="mb-10 w-96 p-5  max-h-52  relative  my-5 bg-black ">
                  <div className="flex justify-center items-center">
                    <img src={URL.createObjectURL(update.image)} className="max-h-52 max-w-52 cover" alt="Product" />
                    <button onClick={() => setUpdate({ ...update, image: null })} className="absolute top-2 left-2 cursor-pointer bg-red-500 text-white p-2">X</button>
                  </div>
                </div>
              )
          }
          <Button onClick={handleUpdate}>Update</Button>
        </form>
      </div>
    </Box>
  );
}

export default UpdatePage;
