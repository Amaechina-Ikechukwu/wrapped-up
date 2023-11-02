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
        wpc: {

          orange: '#FFC977',
          green: '#BAEA99',
          text: "#424242"

        },
      },
    },
    dark: {
      palette: {
        wpc: {

          orange: '#FFC977',
          green: '#BAEA99',
          text: "#E4E4E4"
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
