import styled from 'styled-components'

interface IHeaderContainerProps {
  isHomePage: boolean
}

export const HeaderContainer = styled.header<IHeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10rem;
  padding: 2rem 0;

  // TODO Definir opacidade quando for a Home
  opacity: ${({ isHomePage }) => (isHomePage ? '0.4' : '1')};
`

export const CheckoutInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocaleInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 9rem;
  height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};

  font-size: 0.875rem;
`

export const CartInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
`
