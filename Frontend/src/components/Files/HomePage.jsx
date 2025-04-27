import Product from "./Product";
import { Grid } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        marginTop={10}
        gap="6"
        padding={5}
      >
        <Product />
      </Grid>
    </>
  );
}

export default HomePage;
