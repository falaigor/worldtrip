import { Banner } from '../components/Home/banner'
import { Travel } from '../components/Home/travel';
import { Flex, Text, Box, Image, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Banner />
      <Flex align="center" justify="center">
        <Travel />
      </Flex>
    </>
  )
}