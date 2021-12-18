import React from "react";
import {
  Image,
  Box,
  Button,
  Flex,
  Center,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import GoBackLink from "./GoBackLink";

interface HeaderProps {
  showGoBackLink?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showGoBackLink = false }) => {
  return (
    <Flex position={'relative'}>
      {showGoBackLink && <GoBackLink />}

      <Image
        src="/trand/logo.svg"
        alt="Logo"
        my={["2", "4", "6"]}
        mx={"auto"}
      />
    </Flex>
  );
};
