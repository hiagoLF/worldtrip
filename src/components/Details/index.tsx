import {
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Heading,
  Box,
  Icon,
  Image,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";

// import { Container } from './styles';

interface ContinentNumbers {
  countries: number;
  idioms: number;
  cities: number;
  allCities: number;
}

interface DetailsProps {
  text: string;
  numbers: ContinentNumbers;
}

const Details: React.FC<DetailsProps> = ({ text, numbers }) => {
  return (
    <Box maxW={1150} py="10">
      <SimpleGrid px="5" minChildWidth={350} gap="5">
        <Text fontWeight="regular">{text}</Text>

        <HStack justifyContent={"space-between"} px={"10"}>
          <VStack>
            <Heading color={"yellow.500"}>{numbers.countries}</Heading>
            <Text fontWeight="semibold">países</Text>
          </VStack>

          <VStack>
            <Heading color={"yellow.500"}>{numbers.idioms}</Heading>
            <Text fontWeight="semibold">línguas</Text>
          </VStack>

          <VStack>
            <Heading color={"yellow.500"}>{numbers.cities}</Heading>
            <HStack>
              <Text fontWeight="semibold">cidades +100</Text>
              <Tooltip label={`${numbers.allCities} cidades ao todo`}>
                <Image src="/icons/info.svg" alt="info" width={4} />
              </Tooltip>
            </HStack>
          </VStack>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};

export default Details;
