import styled from 'styled-components'

export const Container = styled.div`
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
