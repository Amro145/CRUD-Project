import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import api from "../../api";

function Product() {
  const [productItem, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      if (response.data.success) {
        setProduct(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (productItem.length === 0) {
    return (
      <Box className="flex justify-center w-dvw max-h-dvh">
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

  if (loading) {
    return (
      <Box className="flex justify-center w-dvw max-h-dvh">

        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
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
            });
        }
      });
  };

  return (
    <>
      {productItem.map((product) => {
        return (
          <Card.Root maxW="sm" overflow="hidden" key={product._id} className="flex justify-center w-dvw max-h-100">
            <Image
              src={
                product.image ||
                "https://www.google.com/imgres?q=unknown%20product&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fclosed-mysterious-black-box-isometric-260nw-2478513845.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Funknown-product&docid=pkOsSOWE8d4fUM&tbnid=QGpQNi2fwOD8IM&vet=12ahUKEwiI-JiU66qLAxWiavEDHWWLIy0QM3oECGcQAA..i&w=260&h=280&hcb=2&ved=2ahUKEwiI-JiU66qLAxWiavEDHWWLIy0QM3oECGcQAA"
              }
              alt={product.title}
              className="w-dvw max-h-60 object-contain"
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
