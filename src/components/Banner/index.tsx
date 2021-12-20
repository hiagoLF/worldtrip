import {
  Flex,
  HStack,
  Heading,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Banner: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex backgroundImage="url('/trand/bg_banner.png')">
      <HStack
        flex="1"
        justifyContent="space-between"
        maxW={1148}
        mx="auto"
        px={"3"}
      >
        <VStack spacing="5" align="flex-start" py={55} pl={!isWideVersion && 15}>
          <Heading
            fontSize="3xl"
            color="gray.20"
            fontWeight="medium"
            lineHeight="10"
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Heading>
          <Heading
            fontSize="1xl"
            color="gray.90"
            fontWeight="regular"
            maxW={524}
          >
            5 Chegou a Hora de tirar do papel a viagem que você sempre sonhou
          </Heading>
        </VStack>
        {isWideVersion && (
          <Image
            src="/trand/airplane.svg"
            alt="Avião"
            transform="translateY(30px)"
          />
        )}
      </HStack>
    </Flex>
  );
};

export default Banner;
