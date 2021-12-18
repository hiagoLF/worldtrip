import { VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import ContinentBanner from "../../components/ContinentBanner";
import Details from "../../components/Details";
import { Header } from "../../components/Header";
import { continents } from "../../data/continents.json";
import { getContinentPaths } from "../../services/continents";

interface ContinentNumbers {
  countries: number;
  idioms: number;
  cities: number;
}

interface City {
  name: string;
  country: string;
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
    </VStack>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const continents = getContinentPaths();

  return {
    paths: continents,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { continent } = params;

  console.log("Resultado >>> ", params);

  const selectedContinent = continents.find(
    (currentContinent) => currentContinent.id === continent
  );

  return {
    props: {
      continent: selectedContinent,
    },
  };
};

export default Continent;
