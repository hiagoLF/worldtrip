import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import CityCard from "./CityCard";

interface City {
  name: string;
  country: string;
  id: string;
  countryFlag: string;
}

interface CitiesProps {
  cities: City[];
}

const Cities: React.FC<CitiesProps> = ({ cities }) => {
  return (
    <VStack width="100%" maxW={1148} paddingBottom={50} px='5'>
      <Box width={"100%"} marginBottom={"5"}>
        <Heading ml={"1"} fontWeight={"medium"} textAlign={"left"}>
          Cidades +100
        </Heading>
      </Box>

      <SimpleGrid
        minChildWidth={256}
        w="100%"
        alignContent={'space-between'}
        justifyContent={'space-around'}
        gap={5}
      >
        {cities.map((city) => (
          <CityCard
            key={city.id}
            imageUrl={`/cities/${city.id}`}
            name={city.name}
            country={city.country}
            flag={city.countryFlag}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Cities;
