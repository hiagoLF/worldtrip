import { HStack, Divider, VStack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import TravelType from "./TravelType";
import MineTravelTypes from './MineTravelTypes'

const WideTravelTipes: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <VStack mx="auto" w="100%" maxWidth={1148}>
      {isWideVersion ? (
        <HStack
          mx="auto"
          mt={70}
          mb={50}
          justifyContent="space-between"
          w="100%"
          px="5"
        >
          <TravelType imageSrc="/icons/cocktail.svg" text="vida noturna" />
          <TravelType imageSrc="/icons/surf.svg" text="praia" />
          <TravelType imageSrc="/icons/building.svg" text="moderno" />
          <TravelType imageSrc="/icons/museum.svg" text="clássico" />
          <TravelType imageSrc="/icons/earth.svg" text="e mais..." />
        </HStack>
      ) : (
        <MineTravelTypes />
      )}

      <Divider size="100px" borderColor="gray.500" width={100} />
    </VStack>
  );
};

export default WideTravelTipes;
