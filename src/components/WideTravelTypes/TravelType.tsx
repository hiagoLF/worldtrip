import { VStack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface TravelTypeProps {
  text: string;
  imageSrc: string;
}

const TravelType: React.FC<TravelTypeProps> = ({ text, imageSrc }) => {
  return (
    <VStack>
      <Image src={imageSrc} alt={text} mb='3' />
      <Text fontWeight="semibold">{text}</Text>
    </VStack>
  );
};

export default TravelType;
