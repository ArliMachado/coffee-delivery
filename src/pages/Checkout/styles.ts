import styled, { css } from 'styled-components'

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
const BaseContainer = styled.div`
  width: 40rem;
  border-radius: 0.375rem;

  padding: 2.5rem;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme['base-card']};
`

type TitleinfoProps = {
  iconType: 'address' | 'payment'
}

export const TitleInfo = styled.div<TitleinfoProps>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;

  gap: 0.5rem;

  svg {
    color: ${({ theme, iconType }) =>
      iconType === 'address' ? theme['yellow-dark'] : theme.purple};
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

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const AddressContainer = styled(BaseContainer)`
  margin-top: 0.9rem;
  height: 23.25rem;
`

export const PaymentContainer = styled(BaseContainer)`
  height: 12.9rem;
  margin-top: 0.75rem;
`

export const PaymentTypeContent = styled.div`
  /* margin-top: 2rem; */
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

type RadioBoxProps = {
  isActive?: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3.18rem;
  width: 11.1rem;
  padding: 1rem;

  border: ${({ theme, isActive }) =>
    isActive ? `1px solid ${theme.purple}` : `0`};
  border-radius: 0.375rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: 0.75rem;

  background: ${({ theme, isActive }) =>
    isActive ? theme['purple-light'] : theme['base-button']};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`
