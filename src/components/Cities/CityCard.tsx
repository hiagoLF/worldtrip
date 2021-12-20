import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

interface CityCardProps {
  imageUrl: string;
  name: string;
  country: string;
  flag: string;
}

const CityCard: React.FC<CityCardProps> = ({
  imageUrl,
  name,
  country,
  flag,
}) => {
  return (
    <VStack width={256} borderColor={'yellow.300'} borderWidth={1} borderRadius={4} backgroundColor={'white'} margin='auto'>
      <Image src={imageUrl} alt={name} w='100%' h={173}/>

      <HStack w='100%' justifyContent={'space-between'} padding={5}>
        <VStack align={'left'}>
          <Text fontWeight={'semibold'}>{name}</Text>
          <Text fontWeight={'medium'} color={'gray.300'} fontSize={'sm'}>{country}</Text>
        </VStack>

        <Text>{getUnicodeFlagIcon(flag)}</Text>
      </HStack>
    </VStack>
  );
};

export default CityCard;
