import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Home } from './Home'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}
