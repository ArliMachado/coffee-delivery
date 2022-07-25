import styled, { css } from 'styled-components'

type ContainerProps = {
  size: 'small' | 'medium'
}

const containerModifiers = {
  small: () => css`
    height: 2rem;
    width: 4.5rem;
  `,
  medium: () => css`
    height: 2.37rem;
    width: 5.6rem;
  `,
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${theme['base-button']};

    padding: 0.5rem;
    border-radius: 0.375rem;

    span {
      color: ${theme['base-title']};
      line-height: 1.3rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: none;
      cursor: pointer;
      color: ${theme.purple};

      &:hover {
        color: ${theme['purple-dark']};
      }
    }

    ${!!size && containerModifiers[size]()}
  `}
`
