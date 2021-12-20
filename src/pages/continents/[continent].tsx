import { VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Cities from "../../components/Cities";
import ContinentBanner from "../../components/ContinentBanner";
import Details from "../../components/Details";
import { Header } from "../../components/Header";
import { continents } from "../../data/continents.content.json";

// import {
//   getContinentPaths,
//   getContinentProps,
// } from "../../services/continents";

interface ContinentNumbers {
  countries: number;
  idioms: number;
  cities: number;
  allCities: number;
}

interface City {
  name: string;
  country: string;
  id: string;
  countryFlag: string;
}

interface Continent {
  id: string;
  title: string;
  textDescription: string;
  numbers: ContinentNumbers;
  mainCities: City[];
}

interface ContinentProps {
  continent: Continent;
  cities: City[];
}

const Continent: React.FC<ContinentProps> = ({ continent }) => {
  return (
    <VStack>
      <Header showGoBackLink={true} />
      <ContinentBanner
        imageUrl={`/countries/${continent.id}.jpg`}
        name={continent.title}
      />
      <Details text={continent.textDescription} numbers={continent.numbers} />
      <Cities cities={continent.mainCities} />
    </VStack>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const continentsPaths = continents.map((continents) => ({
    params: { continent: continents.id },
  }));

  return {
    paths: continentsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { continent } = params;

  const continentProps = continents.find((current) => current.id === continent);

  return {
    props: {
      continent: continentProps,
    },
  };
};

export default Continent;
