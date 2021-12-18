import { Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

// import { Container } from './styles';

const GoBackLink: React.FC = () => {
  return (
    <VStack
      position={"absolute"}
      left={0}
      right={0}
      top={0}
      bottom={0}
      margin={"auto"}
      width={"90%"}
      maxW={1150}
      align={"flex-start"}
      justifyContent={"center"}
    >
      <Link href="/" passHref>
        <Image src="/icons/back.svg" alt="back" cursor={"pointer"} />
      </Link>
    </VStack>
  );
};

export default GoBackLink;
