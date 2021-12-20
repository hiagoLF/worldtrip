import { Box, Center, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface ContinentBannerProps {
  imageUrl: string;
  name: string;
}

const ContinentBanner: React.FC<ContinentBannerProps> = ({
  imageUrl,
  name,
}) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Center
      backgroundImage={imageUrl}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      height={500}
      width={"100%"}
      position={"relative"}
    >
      <Heading
        fontWeight={"semibold"}
        color={"gray.20"}
        fontSize={"5xl"}
        position={isWideVersion ? "absolute" : "unset"}
        textAlign={"center"}
        // height={'100%'}
        bottom={20}
        left={20}
        textShadow={"2px 2px #000"}
      >
        {name}
      </Heading>
    </Center>
  );
};

export default ContinentBanner;
