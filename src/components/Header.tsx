import Link from "next/link";
import { useRouter } from "next/router";
import {
  Flex,
  Img,
  IconButton,
  Icon,
  Box,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps extends ChakraLinkProps {
  href: string;
}

export function Header({ href }: HeaderProps) {
  const { asPath } = useRouter();
  let isHomePage = false;

  isHomePage = asPath === "/" && true;

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="28"
      marginX="auto"
      paddingX={["5", "6", "32"]}
      paddingY={["4", "7"]}
      align="center"
    >
      {!isHomePage && (
        <Link href={href} passHref>
          <ChakraLink>
            <IconButton
              aria-label="back navigation"
              icon={<Icon as={FiChevronLeft} />}
              fontSize={["20", "24"]}
              colorScheme="dark.text"
              variant="unstyled"
              textAlign="left"
            ></IconButton>
          </ChakraLink>
        </Link>
      )}

      <Box marginLeft="auto" marginRight="auto">
        <Img src="/images/logo.svg" alt="logo worldtrip" />
      </Box>
    </Flex>
  );
}
