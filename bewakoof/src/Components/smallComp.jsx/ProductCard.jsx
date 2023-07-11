import { Badge, Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import HoverImage from "react-image-hover";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  id,
  Display_image,
  hover_Image,
  Title,
  price,
  strikeprice,
  moreImage,
}) => {
  const navigate = useNavigate();

  // to navigate to More Product Details
  const VisitSingleProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width={{ base: "100%", md: "auto" }}
    >
      <Image
        onClick={VisitSingleProduct}
        src={Display_image}
        hoverSrc={hover_Image}
        alt={Title}
      />

      <VStack align="revert-layer">
        <Text fontSize={{ base: "16px", md: "20px" }} fontStyle="oblique" fontWeight="bold" marginTop={2}>
          Bewakoof
        </Text>
        <Text fontSize={{ base: "12px", md: "15px" }} color="gray.500">
          {Title}
        </Text>
        <Flex>
          <Text fontWeight="bold" fontSize={{ base: "16px", md: "2xl" }}>
            ₹{price}
          </Text>

          <Text as="s" marginLeft={4}>
            ₹{strikeprice}
          </Text>
        </Flex>

        <Badge variant="subtle" colorScheme="teal">
          ₹{price - 50} for tribe members
        </Badge>
      </VStack>
    </Box>
  );
};

export default ProductCard;
