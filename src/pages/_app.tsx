import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/global.scss";

const AppTheme = {
  colors: {
    gray: {
      "500": "#47585B",
      "90": "#DADADA",
      "20": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.20",
        color: "gray.500",
      },
    },
  },
};

const theme = extendTheme(AppTheme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
