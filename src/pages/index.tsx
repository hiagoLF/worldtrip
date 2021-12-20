import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Banner from "../components/Banner";
import ContinentsSlide from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import Invitation from "../components/Invitation";
import WideTravelTipes from "../components/WideTravelTypes";
import { continents as slideContinents } from "../data/slide.json";

export default function Home({ continents }) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <WideTravelTipes />
      <Invitation />
      <ContinentsSlide continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      continents: slideContinents,
    },
  };
};
