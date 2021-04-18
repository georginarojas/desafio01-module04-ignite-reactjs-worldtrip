import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { Information } from "../../components/Continent/Information";

export default function Continent() {
  return (
    <Flex
      direction="column"
      display="block"
      height="100vh"
      width={["375px", "1262px"]}
      maxWidth={1480}
    >
      <Header href="/" />
      <Banner />
      <Information />
    </Flex>
  );
}
