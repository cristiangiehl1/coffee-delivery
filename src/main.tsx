import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { CartProvider } from "./contexts/CartProvider"
import { UserFormProvider } from "./contexts/UserFormProvider"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider theme={defaultTheme}>
    <CartProvider>
    <UserFormProvider>
      <AppRoutes />
    </UserFormProvider>  
    </CartProvider>
  <GlobalStyle />
  </ThemeProvider>
  </React.StrictMode>
)
