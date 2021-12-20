import { Avatar, Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import MineType from './MineType'


const WideTravelTypes: React.FC = () => {
  return (
    <VStack width={'100%'} px={'5'} gap={'5'} my={'10'}>
      <HStack width={'100%'} maxW={400} justifyContent={'space-between'}>
        <MineType text="vida noturna"/>
        <MineType text="praia"/>
      </HStack>

      <HStack width={'90%'} maxW={400} justifyContent={'space-between'}>
        <MineType text="moderno"/>
        <MineType text="clássico"/>
      </HStack>

      <MineType text="e mais..."/>
    </VStack>
  );
};

export default WideTravelTypes;
