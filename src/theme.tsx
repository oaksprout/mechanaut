// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      50: '#dffeec',
      100: '#b9f4d1',
      200: '#90edb4',
      300: '#65e496',
      400: '#3cdc7a',
      500: '#23c360',
      600: '#17984a',
      700: '#0c6c34',
      800: '#02421e',
      900: '#001805',
    },
    // gray: {
    //   50: '#ffe6f8',
    //   100: '#f7bce1',
    //   200: '#ee92cb',
    //   300: '#e567b4',
    //   400: '#dc3c9f',
    //   500: '#c32386',
    //   600: '#981968',
    //   700: '#6d104b',
    //   800: '#44072e',
    //   900: '#1c0012',
    // },
  },
})

export default theme
