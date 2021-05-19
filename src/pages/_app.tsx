import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from '../components/header';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </ChakraProvider>
  )
}

export default MyApp
