import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      width="100%"
      height={["150px", "500px"]}
      bgImage="url(/continents/europe.jpg)"
      bgSize="cover"
      bgRepeat="no-repeat"
      // marginBottom={["24px", "80px"]}
      align={isWideVersion ? "flex-end": "center"}
      justify={isWideVersion ? "bottom": "center"}
      >
      <Text
        fontSize={["28px", "48px"]}
        fontWeight="600"
        color="light.text"
        lineHeight={["42px", "72px"]}
        marginLeft={isWideVersion && "140px"}
        marginBottom={isWideVersion && "59px"}
      >
        Europa
      </Text>
    </Flex>
  );
}
