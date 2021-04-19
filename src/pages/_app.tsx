import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "../styles/global.css";

import { ContinentProvider } from "../hooks/useContinent";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentProvider>
        <Component {...pageProps} />
      </ContinentProvider>
    </ChakraProvider>
  );
}

export default MyApp;
