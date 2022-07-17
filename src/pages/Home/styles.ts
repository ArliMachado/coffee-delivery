import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: relative;
  /* margin-top: 5.6rem; */
`

export const CoffeesContent = styled.div`
  margin-top: 2rem;

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

  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2.5rem 2rem;
`
