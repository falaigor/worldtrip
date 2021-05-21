import { Text, Box, Image } from "@chakra-ui/react";

interface TravelTypeItemProps {
  name: string;
  icon: string;
}

export function TravelTypeItem({ name, icon }: TravelTypeItemProps) {
  return (
    <Box align="center">
      <Image w="85px" src={icon} />
      <Text fontWeight="bold" mt={3}>
        {name}
      </Text>
    </Box>
  )
}