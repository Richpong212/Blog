import React from 'react'
import Home from './Home/Home'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
     <Home />
    </ChakraProvider>
  )
}

export default App