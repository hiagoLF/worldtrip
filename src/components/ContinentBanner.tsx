import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface ContinentBannerProps {
  imageUrl: string;
  name: string;
}

const ContinentBanner: React.FC<ContinentBannerProps> = ({
  imageUrl,
  name,
}) => {
  return (
    <Box
      backgroundImage={imageUrl}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      height={500}
      width={'100%'}
      position={'relative'}
    >
      <Heading
        fontWeight={"semibold"}
        color={"gray.20"}
        fontSize={"5xl"}
        bottom={0}
        position={'absolute'}
        ml={'40'}
        mb={'20'}
      >
        {name}
      </Heading>
    </Box>
  );
};

export default ContinentBanner;
