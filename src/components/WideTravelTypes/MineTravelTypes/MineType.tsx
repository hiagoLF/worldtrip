import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface MineTravelTypesProps {
  text: string;
}

const MineTravelTypes: React.FC<MineTravelTypesProps> = ({ text }) => {
  return (
    <HStack>
      <Box
        width={5}
        height={5}
        borderRadius={"50%"}
        backgroundColor={"yellow.500"}
      />
      <Text fontWeight={'medium'} fontSize='2xl'>{text}</Text>
    </HStack>
  );
};

export default MineTravelTypes;
