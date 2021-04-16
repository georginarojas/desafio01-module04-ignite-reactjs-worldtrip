import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Header href="/" />
      <Banner />
      <NavBar />
    </Flex>
  );
}
