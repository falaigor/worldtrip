import { Flex, Text, Box, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex bgGradient="linear(to-t, #011327, #082F4C)"
      align="center"
      justify="center">
      <Flex
        w="1240px"
        align="center"
        justify="space-between"
      >
        <Box
          mt="5px"
          justify="center"
          color="white"
        >
          <Text textStyle="h1">5 Continentes,</Text>
          <Text textStyle="h1">infinitas possibilidades.</Text>
          <Text>Chegou a hora de tirar do papel a viagem que você sonhou.</Text>
        </Box>

        <Box
          align="center"
          justify="center"
          position="relative"
        >
          <Image src="/airplane.svg" pb="-100px" />
        </Box>
      </Flex>
    </Flex>
  )
}