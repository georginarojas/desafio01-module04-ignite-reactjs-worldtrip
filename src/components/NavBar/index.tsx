import {
  SimpleGrid,
  Box,
  Img,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";

export function NavBar() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <SimpleGrid
      flex="1"
      gap={["15px", "47px"]}
      minChildWidth="158px"
      align="flex-end"
      paddingX={["50px", "140px"]}
      paddingY={["36px", "80px"]}
    >
      <NavLink
        imgSrc="/images/cocktail.png"
        altImg="Cocktail image"
        children="vida noturna"
        href="#"
      />

      <NavLink
        imgSrc="/images/surf.png"
        altImg="surf image"
        children="praia"
        href="#"
      />

      <NavLink
        imgSrc="/images/building.png"
        altImg="building image"
        children="moderno"
        href="#"
      />

      <NavLink
        imgSrc="/images/museum.png"
        altImg="museum image"
        children="clássico"
        href="#"
      />
      <NavLink
        imgSrc="/images/earth.png"
        altImg="earth image"
        children="e mais..."
        href="#"
      />
    </SimpleGrid>
  );
}
