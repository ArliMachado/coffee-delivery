import * as S from './styles'
import { useFormContext } from 'react-hook-form'

export function NewFormAddress() {
  const { register } = useFormContext()
  return (
    <S.NewFormAddressContainer>
      <S.CepInput type="number" placeholder="CEP" {...register('cep')} />
      <S.StreetInput type="text" placeholder="Rua" {...register('street')} />
      <S.NumberInfo>
        <S.NumberInput
          type="number"
          placeholder="Número"
          {...register('number')}
        />
        <S.ComplementInfo>
          <p>(Opcional)</p>
          <S.ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </S.ComplementInfo>
      </S.NumberInfo>
      <S.CityInfo>
        <S.DistrictInput
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <S.CitytInput type="text" placeholder="Cidade" {...register('city')} />
        <S.StateInput type="text" placeholder="UF" {...register('state')} />
      </S.CityInfo>
    </S.NewFormAddressContainer>
  )
}
