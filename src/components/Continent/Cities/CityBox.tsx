import { Box, Circle, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";

export function CityBox() {
  return (
    <Box width="225px" height="279px" borderRadius="4px">
      <Img
        src="/continents/europe.jpg"
        alt="europe city"
        height="173px"
        width="225px"
        objectFit="cover"
        borderRadius="4px 4px 0 0"
      />
      <HStack
        display="flex"
        paddingX="24px"
        paddingTop="18px"
        paddingBottom="25px"
        borderColor="orange.300"
        borderWidth="1px"
        borderTop="none"
        borderRadius="0 0 4px 4px"
      >
        <Box display="block" marginRight="auto">
          <Text
            fontSize="20px"
            fontWeight="600"
            lineHeight="25px"
            color="dark.text"
            fontFamily="Barlow"
          >
            Londres
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            lineHeight="26px"
            color="dark.info"
            fontFamily="Barlow"
            marginTop="10px"
          >
            Reino Unido
          </Text>
        </Box>
        <Circle size="30px" marginLeft="auto">
          <Img
            src="/images/building.png"
            alt="city flag"
            height="30px"
            width="30px"
            objectFit="cover"
          />
        </Circle>
      </HStack>
    </Box>
  );
}
