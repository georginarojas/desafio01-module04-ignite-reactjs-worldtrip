import React from "react";
import { Box, Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      width="100%"
      position="relative"
      marginY="2"
      height={["163px", "335px"]}
    >
      <Img src="/images/banner-background.png" alt="banner background" />

      <Box
        position="absolute"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          display="column"
          align="left"
        >
          <Text
            width={["238px", "426px"]}
            height={["58px", "108px"]}
            marginLeft={["16px", "140px"]}
            marginTop={["28px", "80px"]}
            fontSize={["20px", "36px"]}
            fontWeight="500"
            lineHeight={["30px", "54px"]}
            color="light.text"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            width={["333px", "524px"]}
            height={["41px", "57px"]}
            fontSize={["14px", "20px"]}
            lineHeight={["21px", "30px"]}
            marginLeft={["16px", "140px"]}
            marginTop={["8xp", "20px"]}
            color="light.info"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>

        {isWideVersion && (
          <Box
            right="auto"
            width="100%"
            height="100%"
            maxWidth="431px"
            transform="rotate(3deg)"
            marginTop="76px"
            marginRight="140px"
          >
            <Img src="/images/airplane.png" alt="airplane" />
          </Box>
        )}
      </Box>
    </Flex>
  );
}
