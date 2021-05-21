import { Banner } from '../components/Home/Banner'
import { Travel } from '../components/Home/Travel';
import { Flex, Text, Box, Image, HStack, Divider, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Banner />
      <Travel />

      <Flex align="center" justify="center">
        <Flex w="1240px" justify="center">
          <Box align="center">
            <Text textStyle="h1">Vamos nessa?</Text>
            <Text textStyle="h1">Então escolha seu continente</Text>
          </Box>

        </Flex>
      </Flex>
    </>
  )
}