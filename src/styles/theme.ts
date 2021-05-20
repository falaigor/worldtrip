import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["36px"],
      fontWeight: "bold",
    },
    h2: {
      fontSize: ["20px"],
    },
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "500": "#47585B",
      "50": "#999999",
    },
    white: {
      "50": "#F5F8FA"
    },
    yellow: {
      "500": "#FFBA08",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.50',
        color: 'gray.500',
      }
    }
  }
})

