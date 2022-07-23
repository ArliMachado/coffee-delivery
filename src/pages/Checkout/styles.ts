import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2rem 10rem;
  height: 100vh;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.46px;
  }
`
export const AddressContainer = styled.div`
  width: 40rem;
  height: 23.25rem;
  margin-top: 0.9rem;
  border-radius: 0.375rem;

  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme['base-card']};
`

export const AddressTitleInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;

  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.3rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.14rem;
  }
`

export const AddressTitle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
