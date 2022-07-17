import styled, { css } from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;

  background: ${({ theme }) => theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }

  ul {
    margin-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    li {
      list-style-type: none;
      background: ${({ theme }) => theme['yellow-light']};
      color: ${({ theme }) => theme['yellow-dark']};
      font-weight: bold;
      font-size: 0.6rem;

      padding: 0.25rem 0.5rem;
      border-radius: 6.25rem;
    }
  }

  strong {
    margin-top: 1rem;
    align-items: center;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 26px;
  }

  p {
    text-align: center;
    margin-top: 0.5rem;
    line-height: 18.2px;
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
  }
`
export const CartContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
  /* gap: 1.8rem; */

  span:first-child {
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.1rem;

    strong {
      margin-left: 0.25rem;
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 2rem;
    }
  }
`

export const CartButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme['base-button']};

  width: 4.5rem;
  height: 2.37rem;
  padding: 0.5rem;
  border-radius: 0.375rem;

  span {
    color: ${({ theme }) => theme['base-title']};
    line-height: 1.3rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: none;
    cursor: pointer;
    color: ${({ theme }) => theme.purple};

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const CartButton = styled.span`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme['purple-dark']};
    color: ${theme['base-card']};

    &:hover {
      background: ${theme.purple};
    }
  `}
`
