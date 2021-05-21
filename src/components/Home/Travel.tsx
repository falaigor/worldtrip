import { HStack, Flex } from "@chakra-ui/react";
import { TravelTypeItem } from "../Home/TravelTypeItem";

export function Travel() {
  return (
    <Flex w="100%">
      <HStack
        w="1240px"
        m="80px"
        pr="40px"
        pl="40px"
        align="center"
        justify="space-between"
      >
        <TravelTypeItem name="vida noturna" icon="/cocktail.svg" />
        <TravelTypeItem name="praia" icon="/surf.svg" />
        <TravelTypeItem name="moderno" icon="/building.svg" />
        <TravelTypeItem name="clássico" icon="/museum.svg" />
        <TravelTypeItem name="e mais..." icon="/earth.svg" />

      </HStack>
    </Flex>
  )
}