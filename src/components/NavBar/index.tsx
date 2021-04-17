import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";
import { FaCircle } from "react-icons/fa";

export function NavBar() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Grid
      flex="1"
      gap={["15px", "47px"]}
      templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
      align="flex-end"
      paddingX={["40px", "140px"]}
      paddingY={["36px", "80px"]}
      autoRows={["minmax(20px, 24px)", "minmax(150px, 158px)"]}
    >
      <GridItem colSpan={1} h="10px">
        <NavLink
          imgSrc="/images/cocktail.png"
          altImg="Cocktail image"
          children="vida noturna"
          href="#"
          isWideVersion={isWideVersion}
          icon={FaCircle}
        />
      </GridItem>

      <GridItem colSpan={1} h="10px">
        <NavLink
          imgSrc="/images/surf.png"
          altImg="surf image"
          children="praia"
          href="#"
          isWideVersion={isWideVersion}
          icon={FaCircle}
        />
      </GridItem>

      <GridItem colSpan={1} h="10px" blockSize={["24px", "145px"]}>
        <NavLink
          imgSrc="/images/building.png"
          altImg="building image"
          children="moderno"
          href="#"
          isWideVersion={isWideVersion}
          icon={FaCircle}
        />
      </GridItem>

      <GridItem colSpan={1} h="10px" blockSize={["24px", "145px"]}>
        <NavLink
          imgSrc="/images/museum.png"
          altImg="museum image"
          children="clássico"
          href="#"
          isWideVersion={isWideVersion}
          icon={FaCircle}
        />
      </GridItem>

      <GridItem
        colSpan={[2, 1]}
        align="center"
      >
        <NavLink
          imgSrc="/images/earth.png"
          altImg="earth image"
          children="e mais..."
          href="#"
          isWideVersion={isWideVersion}
          icon={FaCircle}
        />
      </GridItem>
    </Grid>
  );
}
