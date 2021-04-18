import Link from "next/link";
import { Flex, Img, Box, Text } from "@chakra-ui/react";

interface ContinentProps {
  href: string;
  srcImage: string;
  altText: string;
  name: string;
  description: string;
}

export function Continent({
  href,
  srcImage,
  altText,
  name,
  description,
}: ContinentProps) {
  return (
    <Link href={href}>
      <Flex as="a" direction="column" align="center" justify="center">
        <Img
          src={srcImage}
          alt={altText}
          height={["250px", "450"]}
          width={["375px", "1200px"]}
          maxWidth={1440}
          objectFit="cover"
          opacity="60%"
        />

        <Box position="absolute" align="center">
          <Text
            fontSize={["24px", "48px"]}
            fontWeight="700"
            lineHeight={["36px", "72px"]}
            color="light.text"
            _hover={{ color: "orange.300"}}
            cursor="pointer"
          >
            {name}
          </Text>
          <Text
            fontSize={["14px", "24px"]}
            fontWeight="700"
            lineHeight={["21px", "36px"]}
            color="light.info"
            marginTop={["12px", "16px"]}
          >
            {description}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
}
