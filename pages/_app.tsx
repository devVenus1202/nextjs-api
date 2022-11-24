import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme,  type ThemeConfig, ColorModeScript } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
    </div>
  ) 
}
