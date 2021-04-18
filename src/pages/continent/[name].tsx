import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { Information } from "../../components/Continent/Information";
import { Cities } from "../../components/Continent/Cities";

export default function Continent() {
  const [isViewCities, setIsViewCities] = useState(false);

  function ViewCities() {
    setIsViewCities(true);
  }

  console.log("Isviewcities", isViewCities);

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
      <Information setViewCities={ViewCities} isViewCities={isViewCities}/>
      {isViewCities && <Cities />}
    </Flex>
  );
}
