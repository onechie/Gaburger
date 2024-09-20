import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={{ base: 4, sm: 12 }}>
      <VStack spacing={{ base: 4, sm: 8 }}>
        <Text
          fontSize={{ base: 22, sm: 30 }}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, pink.500, yellow.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Tasty Offerings
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={{ base: 4, sm: 8 }}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color="gray.500"
          >
            No products found{" "}
            <Link to={"/create"}>
              <Text
                as={"span"}
                color="yellow.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
