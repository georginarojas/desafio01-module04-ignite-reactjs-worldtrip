import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Header href="/" />
    </Flex>
  );
}
