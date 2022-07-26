import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 0 10rem;
  margin-top: 5rem;
`

export const TitleInfo = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-dark']};
    line-height: 41.6px;
  }

  p:first-child {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const OrderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 2.5rem;
  gap: 6.3rem;
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 16.8rem;
  width: 32.8rem;
  padding: 2.5rem;
  border-radius: 0.37rem 2.25rem;
  ${({ theme }) => css`
    border: 1px solid transparent;

    background-image: linear-gradient(${theme.background}, ${theme.background}),
      linear-gradient(102.89deg, ${theme.yellow}, ${theme.purple});
    background-origin: border-box;
    background-clip: padding-box, border-box;
  `}
`

type IconContentProps = {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

export const OrderInfoSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  strong {
    font-weight: 700;
  }
`

export const IconContent = styled.span<IconContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};
`
