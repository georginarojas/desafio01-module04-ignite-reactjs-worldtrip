import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  useBreakpointValue,
  HStack,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface InformationProps {
  isViewCities: boolean;
  setViewCities: () => void;
  info: string;
  countries: number;
  languages: number;
  cities: number;
}

export function Information({
  setViewCities,
  isViewCities,
  info,
  countries,
  languages,
  cities,
}: InformationProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleClick() {
    setViewCities();
  }

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
          height={["146px", "240px"]}
          lineHeight={["21px", "36px"]}
          fontSize={["14px", "24px"]}
          textAlign="justify"
          color="dark.text"
        >
          {info}
        </Box>
      </GridItem>

      <GridItem
        colSpan={1}
        alignItems="center"
        display="flex"
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
              {countries}
            </Text>
            <Text fontWeight={!isWideVersion && "400"}>países</Text>
          </Box>

          <Box
            width={["70px", "98px"]}
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
              {languages}
            </Text>
            <Text fontWeight={!isWideVersion && "400"}>línguas</Text>
          </Box>

          <Box
            width={["120px", "185px"]}
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
              {cities}
            </Text>
            <HStack display="flex">
              <Text fontWeight={!isWideVersion && "400"}>cidades +100</Text>
              {/* {!isViewCities && ( */}
                <Tooltip
                  hasArrow
                  label="Olha alguma cidades!"
                  aria-label="A tooltip"
                >
                  <Button
                    size="15px"
                    margin="0"
                    padding="0"
                    bg="light.white"
                    _hover={{ bg: "light.white" }}
                    opacity="50%"
                    // onClick={() => handleClick()}
                  >
                    <FiInfo size={15} />
                  </Button>
                </Tooltip>
               {/* )} */}
            </HStack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
