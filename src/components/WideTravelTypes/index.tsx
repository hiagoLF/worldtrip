import { HStack, Divider, VStack, Text } from "@chakra-ui/layout";
import React from "react";
import TravelType from "./TravelType";

// import { Container } from './styles';

const WideTravelTipes: React.FC = () => {
  return (
    <VStack mx="auto">
      <HStack
        mx="auto"
        mt={70}
        mb={50}
        justifyContent="space-between"
        width={1148}
      >
        <TravelType imageSrc="/icons/cocktail.svg" text="vida noturna" />
        <TravelType imageSrc="/icons/surf.svg" text="praia" />
        <TravelType imageSrc="/icons/building.svg" text="moderno" />
        <TravelType imageSrc="/icons/museum.svg" text="clássico" />
        <TravelType imageSrc="/icons/earth.svg" text="e mais..." />
      </HStack>
      <Divider size="100px" borderColor="gray.500" width={100} />
    </VStack>
  );
};

export default WideTravelTipes;
