import styled from 'styled-components'

export const HomeContainer = styled.div`
  background: ${({ theme }) => theme.background};

  padding: 0 10rem;
`

export const CoffeesContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;

  display: flex;
  flex-direction: column;

  strong {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 41.6px;
  }
`
export const CoffeesList = styled.div`
  margin-top: 3.375rem;
  flex: 1;

  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2.5rem 2rem;
`
