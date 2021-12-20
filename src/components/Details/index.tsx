import {
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

interface ContinentNumbers {
  countries: number;
  idioms: number;
  cities: number;
}

interface DetailsProps {
  text: string;
  numbers: ContinentNumbers;
}

const Details: React.FC<DetailsProps> = ({ text, numbers }) => {
  return (
    <Box maxW={1150} py='10'>
      <SimpleGrid px="5" minChildWidth={350} gap="5">
        <Text fontWeight="regular">{text}</Text>

        <HStack justifyContent={"space-between"} px={"10"}>
          <VStack>
            <Heading fontWeight="semibold" color={"yellow.500"}>
              {numbers.countries}
            </Heading>
            <Text fontWeight="semibold">países</Text>
          </VStack>

          <VStack>
            <Heading fontWeight="semibold" color={"yellow.500"}>
              {numbers.idioms}
            </Heading>
            <Text>línguas</Text>
          </VStack>

          <VStack>
            <Heading fontWeight="semibold" color={"yellow.500"}>
              {numbers.cities}
            </Heading>
            <Text>cidades +100</Text>
          </VStack>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};

export default Details;
