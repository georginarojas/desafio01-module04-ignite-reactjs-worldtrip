import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerProps {
  name: string;
  image: string;
}

export function Banner({ name, image }: BannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      width="100%"
      height={["150px", "500px"]}
      bgImage={`url(${image})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      align={isWideVersion ? "flex-end" : "center"}
      justify={isWideVersion ? "bottom" : "center"}
    >
      <Text
        fontSize={["28px", "48px"]}
        fontWeight="600"
        color="light.text"
        lineHeight={["42px", "72px"]}
        marginLeft={isWideVersion && "140px"}
        marginBottom={isWideVersion && "59px"}
      >
        {name}
      </Text>
    </Flex>
  );
}
