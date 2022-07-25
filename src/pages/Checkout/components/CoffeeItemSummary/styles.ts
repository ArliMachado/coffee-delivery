import styled from 'styled-components'
import { QuantityButtons } from '../../../../components/QuantityButtons'

export const Container = styled.div`
  display: flex;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  margin-left: 1.15rem;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.3rem;
  }
`
export const ButtonsContent = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  font-size: 0.75rem;
  cursor: pointer;
  transition: 0.1s background;

  background: ${({ theme }) => theme['base-button']};
  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  gap: 0.25rem;
  padding: 0 0.5rem;
  height: 2rem;
  width: 5.6rem;
  border-radius: 0.375rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const Priceinfo = styled.p`
  font-weight: 700;
`
