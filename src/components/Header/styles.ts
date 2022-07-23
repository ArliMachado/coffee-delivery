import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* height: 10rem; */
  width: 100%;
  padding: 2rem 10rem;

  background: ${({ theme }) => theme.background};
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
