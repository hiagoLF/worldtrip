import React from "react";
import { Image, Flex } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Flex mx="auto" my={["2", "4", "6"]}>
      <Image src="/trand/logo.svg" alt="Logo" />
    </Flex>
  );
};
