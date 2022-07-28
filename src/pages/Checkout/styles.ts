import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;

  padding: 2rem 10rem;
  height: 100vh;
  gap: 2rem;
`

export const CheckoutForm = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.46px;

    margin-bottom: 0.9rem;
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
  transition: 0.2s background;

  background: ${({ theme, isActive }) =>
    isActive ? theme['purple-light'] : theme['base-button']};

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`

export const CheckoutSumaryContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.46px;

    margin-bottom: 0.9rem;
  }
`
export const SumaryContent = styled.div`
  width: 28rem;
  min-height: 31.1rem;
  padding: 2.5rem;

  background: ${({ theme }) => theme['base-card']};

  border-radius: 0.375rem 2.75rem;
`

export const CoffeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.84rem;
  margin: 1.5rem 0;
`

export const SummaryValue = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.87rem;

    & + p {
      font-size: 1rem;
    }
  }
`
export const TotalValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.button`
  width: 100%;
  height: 2.9rem;
  padding: 0.75rem 0.5rem;
  border: 0;
  border-radius: 0.375rem;
  transition: 0.1s background;

  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
