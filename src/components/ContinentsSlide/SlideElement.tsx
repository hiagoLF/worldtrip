import { Box, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import React from "react";

interface SlideElement {
  imageUrl: string;
  title: string;
  description: string;
  id: string;
}

const SlideElement: React.FC<SlideElement> = ({
  imageUrl,
  title,
  description,
  id,
}) => {
  return (
    <Link _hover={{ textDecor: "" }} href={`/continents/${id}`}>
      <Box h={450}>
        <Image
          src={imageUrl}
          alt={title}
          position="absolute"
          zIndex={-3}
          height="100%"
          width="100%"
          objectFit="cover"
          filter="brightness(0.40)"
        />
        <VStack height="100%" justifyContent="center" color="gray.20">
          <Heading fontWeight="bold" mb="2">
            {title}
          </Heading>
          <Text fontWeight="bold">{description}</Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default SlideElement;
