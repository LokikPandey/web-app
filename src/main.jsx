import { ColorModeScript, ChakraProvider,theme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Colormode from './Colormode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <Colormode/>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
