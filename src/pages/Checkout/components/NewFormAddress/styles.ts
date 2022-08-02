import styled, { css } from 'styled-components'
import { FormInput } from '../FormInput'
import { BaseInput } from '../FormInput/styles'

export const NewFormAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CepInput = styled(FormInput)`
  width: 12.5rem;
`
export const StreetInput = styled(FormInput)`
  width: 100%;
`
export const NumberInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const NumberInput = styled(FormInput)`
  width: 12.5rem;
`
export const ComplementInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  p {
    position: absolute;
    right: 0.75rem;

    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme['base-label']};
    line-height: 0.97rem;
  }
`

export const ComplementInput = styled(FormInput)`
  flex: 1;
  padding-right: 80px;
`

export const CityInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const DistrictInput = styled(FormInput)`
  width: 12.5rem;
`
export const CitytInput = styled(FormInput)`
  width: 100%;
  /* width: auto; */
`
export const StateInput = styled(FormInput)`
  width: 3.75rem;
`
