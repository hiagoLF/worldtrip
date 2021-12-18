import { continents } from "../data/slide.json";

export function getContinentPaths() {
  const formatedContinents = continents.map((continent) => ({
    params: {
      continent: continent.id,
    },
  }));
  return formatedContinents;
}
