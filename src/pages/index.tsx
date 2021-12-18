import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Banner from "../components/Banner";
import ContinentsSlide from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import Invitation from "../components/Invitation";
import WideTravelTipes from "../components/WideTravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <WideTravelTipes />
      <Invitation />
      <ContinentsSlide />
    </Flex>
  );
}