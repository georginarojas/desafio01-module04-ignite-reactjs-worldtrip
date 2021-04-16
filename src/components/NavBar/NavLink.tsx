import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
  Img,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  imgSrc: string;
  altImg: string;
  children: string;
  href: string;
}

export function NavLink({
  imgSrc,
  altImg,
  children,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink {...rest}>
        <Box
          width={["130px", "158px"]}
          height={["24px", "145px"]}
          display="block"
          align="center"
        >
          <Img src={imgSrc} alt={altImg} />
          <Text
            fontSize={["18px", "24px"]}
            fontWeight={["500", "600"]}
            lineHeight={["27px", "36px"]}
            align="center"
            color="dark.text"
            marginTop={["27px", "24px"]}
          >
            {children}
          </Text>
        </Box>
      </ChakraLink>
    </ActiveLink>
  );
}
