import { FieldErrorsImpl } from 'react-hook-form'
import * as S from './styles'

interface INewFormAddress {
  errors: FieldErrorsImpl
}

export function NewFormAddress({ errors }: INewFormAddress) {
  return (
    <S.NewFormAddressContainer>
      <S.CepInput
        inputName="cep"
        errors={errors}
        type="number"
        placeholder="CEP"
      />

      <S.StreetInput
        inputName="street"
        errors={errors}
        type="text"
        placeholder="Rua"
      />

      <S.NumberInfo>
        <S.NumberInput
          inputName="number"
          errors={errors}
          type="number"
          placeholder="Número"
        />

        <S.ComplementInfo>
          <p>(Opcional)</p>
          <S.ComplementInput
            inputName="complement"
            errors={errors}
            type="text"
            placeholder="Complemento"
            containerStyle={{ width: '100%' }}
          />
        </S.ComplementInfo>
      </S.NumberInfo>
      <S.CityInfo>
        <S.DistrictInput
          inputName="district"
          errors={errors}
          type="text"
          placeholder="Bairro"
        />

        <S.CitytInput
          inputName="city"
          errors={errors}
          type="text"
          placeholder="Cidade"
          containerStyle={{ width: '100%' }}
        />

        <S.StateInput
          inputName="state"
          errors={errors}
          type="text"
          placeholder="UF"
          maxLength={2}
        />
      </S.CityInfo>
    </S.NewFormAddressContainer>
  )
}
