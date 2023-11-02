import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssVarsProvider } from '@mui/joy/styles';

import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  fontFamily: {
    display: 'Zen Dots', // applies to `h1`–`h4`
    body: 'Zen Dots', // applies to `title-*` and `body-*`
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#FFFFFF",
          100: '#FFC977',
          200: '#BAEA99',
          300: "#424242"

        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#010B00",
          100: '#FFC977',
          200: '#BAEA99',
          300: "#E4E4E4"
        },
      },
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.


ReactDOM.createRoot(document.getElementById('root')!).render(

  <CssVarsProvider defaultMode="system" theme={theme}>
    <React.StrictMode>  <App /></React.StrictMode></CssVarsProvider>
  ,
)
