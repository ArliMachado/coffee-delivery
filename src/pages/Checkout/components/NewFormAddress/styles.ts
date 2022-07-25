import styled, { css } from 'styled-components'

export const NewFormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BaseInput = styled.input`
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
export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`
export const StreetInput = styled(BaseInput)`
  width: 100%;
`
export const NumberInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ComplementInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;

  p {
    position: absolute;
    right: 0.75rem;
    /* z-index: 1; */

    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme['base-label']};
    line-height: 0.97rem;
  }
`

export const ComplementInput = styled(BaseInput)`
  flex: 1;
  padding-right: 80px;
`

export const CityInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
`
export const CitytInput = styled(BaseInput)`
  /* width: 17.25rem; */
  flex: 1;
`
export const StateInput = styled(BaseInput)`
  width: 3.75rem;
`
