import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Text, Box, Image, Stack, Divider, Center } from "@chakra-ui/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

export function Slider() {
  return (
    <>
      <Flex align="center" justify="center">
        <Flex w="1240px" justify="center">
          <Box align="center">
            <Text textStyle="h1">Vamos nessa?</Text>
            <Text textStyle="h1">Então escolha seu continente</Text>
          </Box>
        </Flex>
      </Flex>

      <Flex align="center" justify="center">
        <Box w="1240px" align="center" justify="center" mt="52px" mb="52px">
          <Swiper navigation={true} className="mySwiper">
            <SwiperSlide>
              <Image src="/europa.png" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </>
  )
}