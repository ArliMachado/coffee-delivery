import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.red};
  }
`

export const BaseInput = styled.input`
  height: 2.6rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme['base-button']};
  outline: none;

  display: flex;
  align-items: center;
  transition: 0.2s border;

  ${({ theme }) => css`
    background: ${theme['base-input']};
    color: ${theme['base-text']};
  `}

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-label']};
    line-height: 1.13rem;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme['yellow-dark']};
  }
`
