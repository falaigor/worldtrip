import { Text, Box, Image, HStack } from "@chakra-ui/react";

export function Travel() {
  return (
    <HStack
      w="1240px"
      m="80px"
      align="center"
      justify="space-between"
    >
      <Box align="center">
        <Image w="85px" src="/cocktail.svg" />
        <Text fontWeight="bold" mt={3}>
          vida noturna
            </Text>
      </Box>
      <Box align="center">
        <Image w="85px" src="/surf.svg" />
        <Text fontWeight="bold" mt={3}>
          praia
            </Text>
      </Box>
      <Box align="center">
        <Image w="85px" src="/building.svg" />
        <Text fontWeight="bold" mt={3}>
          moderno
            </Text>
      </Box>
      <Box align="center">
        <Image w="85px" src="/museum.svg" />
        <Text fontWeight="bold" mt={3}>
          clássico
            </Text>
      </Box>
      <Box align="center">
        <Image w="85px" src="/earth.svg" />
        <Text fontWeight="bold" mt={3}>
          e mais...
            </Text>
      </Box>
    </HStack>
  )
}