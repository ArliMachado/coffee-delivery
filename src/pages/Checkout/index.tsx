import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { NewFormAddress } from './components/NewFormAddress'
import * as S from './styles'

import expressoImg from '../../assets/coffees/Expresso.svg'
import latteImg from '../../assets/coffees/Latte.svg'
import { CoffeeItemSummary } from './components/CoffeeItemSummary'

export function Checkout() {
  const [paymentType, setPaymentType] = useState('')

  function handleSelectPaymentType(type: string) {
    setPaymentType(type)
  }

  return (
    <S.CheckoutContainer>
      <S.CheckoutForm>
        <h1>Complete seu pedido</h1>

        <S.AddressContainer>
          <S.TitleInfo iconType="address">
            <MapPinLine size={22} />
            <S.Title>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </S.Title>
          </S.TitleInfo>

          <form action="">
            <NewFormAddress />
          </form>
        </S.AddressContainer>

        <S.PaymentContainer>
          <S.TitleInfo iconType="payment">
            <CurrencyDollar size={22} />
            <S.Title>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </S.Title>
          </S.TitleInfo>

          <S.PaymentTypeContent>
            <S.RadioBox
              type="button"
              onClick={() => handleSelectPaymentType('creditCard')}
              isActive={paymentType === 'creditCard'}
            >
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </S.RadioBox>

            <S.RadioBox
              type="button"
              onClick={() => handleSelectPaymentType('debit')}
              isActive={paymentType === 'debit'}
            >
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </S.RadioBox>

            <S.RadioBox
              type="button"
              onClick={() => handleSelectPaymentType('cash')}
              isActive={paymentType === 'cash'}
            >
              <Money size={16} />
              <p>DINHEIRO</p>
            </S.RadioBox>
          </S.PaymentTypeContent>
        </S.PaymentContainer>
      </S.CheckoutForm>

      <S.CheckoutSumaryContainer>
        <h1>Cafés selecionados</h1>

        <S.SumaryContent>
          <S.CoffeList>
            <CoffeeItemSummary
              image={expressoImg}
              title="Expresso Tradicional"
              price="R$ 9,90"
              quantity={1}
            />
            <CoffeeItemSummary
              image={latteImg}
              title="Latte"
              price="R$ 19,80"
              quantity={1}
            />
          </S.CoffeList>

          <S.SummaryInfo>
            <S.SummaryValue>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </S.SummaryValue>
            <S.SummaryValue>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </S.SummaryValue>
            <S.TotalValue>
              <p>Total</p>
              <p>R$ 33,20</p>
            </S.TotalValue>
          </S.SummaryInfo>

          <S.ConfirmButton>CONFIRMAR PEDIDO</S.ConfirmButton>
        </S.SumaryContent>
      </S.CheckoutSumaryContainer>
    </S.CheckoutContainer>
  )
}
