import { MapPinLine } from 'phosphor-react'
import { NewFormAddress } from './components/NewFormAddress'
import * as S from './styles'
export function Checkout() {
  return (
    <S.CheckoutContainer>
      <h1>Complete seu pedido</h1>

      <S.AddressContainer>
        <S.AddressTitleInfo>
          <MapPinLine size={22} />
          <S.AddressTitle>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </S.AddressTitle>
        </S.AddressTitleInfo>

        <form action="">
          <NewFormAddress />
          {/* <input type="number" placeholder="CEP" id="cep" />
          <input type="text" id="rua" placeholder="Rua" />
          <input type="number" id="numero" placeholder="Número" />
          <input type="text" id="complemento" placeholder="Complemento" />
          <input type="text" id="bairro" placeholder="Bairro" />
          <input type="text" id="cidade" placeholder="Cidade" />
          <input type="text" id="uf" placeholder="UF" /> */}
        </form>
      </S.AddressContainer>
    </S.CheckoutContainer>
  )
}
