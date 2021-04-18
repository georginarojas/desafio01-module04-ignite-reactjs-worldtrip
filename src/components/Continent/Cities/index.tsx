import { Flex, Text } from "@chakra-ui/react";
import { CitiesGrid } from "./CitiesGrid";

export function Cities() {
  return (
    <Flex
    display="block"
      align="center"
      justify="center"
      paddingX={["20px", "80px"]}
      paddingBottom={["36px", "80px"]}
    >
      <Text
        fontSize={["24px", "36px"]}
        fontWeight="500"
        lineHeight={["36px", "54px"]}
        color="dark.text"
        marginRight="auto"
      >
        Cidades +100
      </Text>
      <CitiesGrid />
    </Flex>
  );
}
