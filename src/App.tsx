import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './Home'
import theme from './theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}
