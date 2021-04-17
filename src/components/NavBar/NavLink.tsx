import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
  Img,
  Text,
  Box,
  Icon,
} from "@chakra-ui/react";
import React, { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  imgSrc: string;
  altImg: string;
  children: string;
  href: string;
  isWideVersion: boolean;
  icon: ElementType;
}

export function NavLink({
  imgSrc,
  altImg,
  children,
  href,
  isWideVersion,
  icon,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink align="center" {...rest}>
        <Box
          width={["120px", "158px"]}
          height={["24px", "145px"]}
          display={isWideVersion ? "block" : "inline"}
          align="center"
        >
          {isWideVersion ? (
            <Img src={imgSrc} alt={altImg} />
          ) : (
            <Icon
              as={icon}
              boxSize={3}
              color="orange.300"
              display={!isWideVersion && "inline-block"}
              marginRight="8px"
            />
          )}
          <Text
            fontSize={["18px", "24px"]}
            fontWeight={["500", "600"]}
            lineHeight={["27px", "36px"]}
            color="dark.text"
            marginTop={["0px", "24px"]}
            display={!isWideVersion && "inline-block"}
          >
            {children}
          </Text>
        </Box>
      </ChakraLink>
    </ActiveLink>
  );
}
