import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import api from "../../api";

function Product() {
  const [productItem, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await api.get("/products");
      if (response.data.success) {
        setProduct(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (productItem.length === 0) {
    return (
      <Box className="flex justify-center w-dvw">
        <div className="flex flex-col items-center">
          <h1>
            There Is No Element
          </h1>
          <Link to="/create" style={{ color: "rebeccapurple" }}>
            Add Product
          </Link>
        </div>
      </Box>
    );
  }

  const handleDelete = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          api.delete(`/products/${id}`)
            .then((res) => {
              if (res.data.success) {
                swal.fire("Deleted!", "Your file has been deleted.", "success");
                fetchProduct(); // Refresh list
              } else {
                swal.fire("Error!", "Failed to delete.", "error");
              }
            })
            .catch((err) => {
              swal.fire("Error!", "Failed to delete.", "error");
              console.log(err);
            });
        }
      });
  };

  return (
    <>
      {productItem.map((product) => {
        return (
          <Card.Root maxW="sm" overflow="hidden" key={product._id}>
            <Image
              src={
                product.image ||
                "https://www.google.com/imgres?q=unknown%20product&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fclosed-mysterious-black-box-isometric-260nw-2478513845.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Funknown-product&docid=pkOsSOWE8d4fUM&tbnid=QGpQNi2fwOD8IM&vet=12ahUKEwiI-JiU66qLAxWiavEDHWWLIy0QM3oECGcQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwiI-JiU66qLAxWiavEDHWWLIy0QM3oECGcQAA"
              }
              alt={product.title}
            />
            <Card.Body gap="2">
              <Card.Title>{product.title}</Card.Title>

              <Text
                textStyle="2xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                ${product.price}
              </Text>
            </Card.Body>
            <Card.Footer gap="2">
              <Button
                variant="solid"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </Button>
              <Button variant="ghost">
                <Link to={`update/${product._id}`}>Update</Link>
              </Button>
            </Card.Footer>
          </Card.Root>
        );
      })}
    </>
  );
}
export default Product;
