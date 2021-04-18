import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Information() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  console.log(isWideVersion);
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      templateRows={["146px 59px ", "repeat(1, 1fr)"]}
      gap={["16px", "42px"]}
      align="center"
      justify="center"
      paddingX={["20px", "80px"]}
      paddingY={["36px", "80px"]}
    >
      <GridItem colSpan={1}>
        <Box
          as="p"
          width={["325px", "550px"]}
          height={["146px", "211px"]}
          lineHeight={["21px", "36px"]}
          fontSize={["14px", "24px"]}
          textAlign="justify"
          color="dark.text"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Box>
      </GridItem>

      <GridItem
        colSpan={1}
        alignItems="center"
        display="flex"
        // flexDirection="row"
        // flexWrap="wrap"
        justifyContent="center"
        justifySelf="start"
      >
        <Flex
          display="inline-block"
          width={["325px", "490px"]}
          height={["59px", "99px"]}
          position="relative"
        >
          <Box
            width={["60px", "98px"]}
            // height={["59px", "98x"]}
            lineHeight={["27px", "36px"]}
            fontSize={["18px", "24px"]}
            fontWeight="600"
            color="dark.text"
            position="absolute"
            marginLeft={["0px", "20px"]}
          >
            <Text
              fontSize={["24px", "48px"]}
              color="orange.300"
              lineHeight={["36px", "72px"]}
            >
              50
            </Text>
            <Text fontWeight={!isWideVersion && "400"}>países</Text>
          </Box>

          <Box
            width={["70px", "98px"]}
            // height={["59px", "98x"]}
            lineHeight={["27px", "36px"]}
            fontSize={["18px", "24px"]}
            fontWeight="600"
            color="dark.text"
            position="absolute"
            marginLeft={["99px", "160px"]}
          >
            <Text
              fontSize={["24px", "48px"]}
              color="orange.300"
              lineHeight={["36px", "72px"]}
            >
              60
            </Text>
            <Text fontWeight={!isWideVersion && "400"}>línguas</Text>
          </Box>

          <Box
            width={["120px", "165px"]}
            // height={["59px", "98x"]}
            lineHeight={["27px", "36px"]}
            fontSize={["18px", "24px"]}
            fontWeight="600"
            color="dark.text"
            position="absolute"
            marginLeft={["201px", "300px"]}
          >
            <Text
              fontSize={["24px", "48px"]}
              color="orange.300"
              lineHeight={["36px", "72px"]}
            >
              27
            </Text>
            <Text fontWeight={!isWideVersion && "400"}>cidades +100</Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
