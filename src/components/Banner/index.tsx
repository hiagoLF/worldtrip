import { Flex, HStack, Box, Heading } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Flex backgroundImage="url('/trand/bg_banner.png')">
      <HStack>
        <Box>
          <Heading fontSize="x-large">5 Continentes</Heading>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Banner;
