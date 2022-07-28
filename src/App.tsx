import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CheckoutcontextProvider } from './contexts/CheckoutContext'
import { Home } from './pages/Home'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CheckoutcontextProvider>
          <Router />
        </CheckoutcontextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
