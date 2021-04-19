import Link from "next/link";
import {
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

interface LinkContinentProps extends ChakraLinkProps {
  name: string;
  href: string;
}

export function LinkContinent({ name, href, ...rest }: LinkContinentProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink {...rest} _hover={{ textDecoration: "none" }}>
        <Text
          fontSize={["24px", "48px"]}
          fontWeight="700"
          lineHeight={["36px", "72px"]}
          color="light.text"
          _hover={{ color: "orange.300" }}
          cursor="pointer"
          textDecoration="none"
        >
          {name}
        </Text>
      </ChakraLink>
    </Link>
  );
}
