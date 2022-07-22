import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  ${({ theme }) => css`
    /* background: ${theme.background}; */
    color: ${theme['base-text']};
    -webkit-font-smoothing: antialiased;
  `}
}

body, input, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

`
