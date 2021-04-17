import React from "react";
import { Text, Box, Divider, Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Header href="/" />
      <Banner />
      <NavBar />
      <Box
        width={["60px", "90px"]}
        align="center"
        justify="center"
        margin="0 auto"
      >
        <Divider borderColor="dark.text" borderWidth="2px" />
      </Box>

      <Text
        width={["297px", "839px"]}
        height={["54px", "101px"]}
        fontSize={["20px", "36px"]}
        fontWeight="500"
        lineHeight={["30px", "54px"]}
        color="dark.text"
        align="center"
        margin="0 auto"
        marginTop={["24px", "48px"]}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Slider />
      <br/>
    </Flex>
  );
}
