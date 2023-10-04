import { ThemeContextProvider } from '../context/theme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter'


const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
