import * as S from './styles'

export function NewFormAddress() {
  return (
    <S.NewFormAddressContainer>
      <S.CepInput type="number" placeholder="CEP" />
      <S.StreetInput type="text" placeholder="Rua" />
      <S.NumberInfo>
        <S.NumberInput type="number" placeholder="Número" />
        <S.ComplementInfo>
          <p>(Opcional)</p>
          <S.ComplementInput type="text" placeholder="Complemento" />
        </S.ComplementInfo>
      </S.NumberInfo>
      <S.CityInfo>
        <S.DistrictInput type="text" placeholder="Bairro" />
        <S.CitytInput type="text" placeholder="Cidade" />
        <S.StateInput type="text" placeholder="UF" />
      </S.CityInfo>
    </S.NewFormAddressContainer>
  )
}
