import { GetStaticPaths, GetStaticProps } from "next";
import { continents } from "../../data/continents.json";

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
  console.log(continent);

  return <h1>Continente</h1>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { continent } = params;

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
