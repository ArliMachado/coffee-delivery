import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh - 10rem);
  /* padding: 0 10rem; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.background};
`
