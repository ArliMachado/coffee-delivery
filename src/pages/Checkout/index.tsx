import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useMemo, useState } from 'react'
import { NewFormAddress } from './components/NewFormAddress'
import * as S from './styles'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CoffeeItemSummary } from './components/CoffeeItemSummary'
import { ICoffeProps } from '../../reducers/checkout/reducers'
import formatValue from '../../utils/formatValue'

interface IBalance {
  totalItens: number
  totalCheckout: number
}

export function Checkout() {
  const freightPrice = 3.5
  const freightPriceFormatted = useMemo(() => {
    return formatValue(freightPrice)
  }, [])

  const [paymentType, setPaymentType] = useState('')
  const {
    coffees,
    increaseItemQuantityInCart,
    decreaseItemQuantityInCart,
    removeItemFromCart,
  } = useContext(CheckoutContext)

  function handleSelectPaymentType(type: string) {
    setPaymentType(type)
  }

  function handleAddQuantityItem(id: number) {
    increaseItemQuantityInCart(id)
  }

  function handleReduceQuantityItem(id: number) {
    decreaseItemQuantityInCart(id)
  }

  function handleRemoveItemFromCart(id: number) {
    removeItemFromCart(id)
  }

  const { totalItens, totalCheckout } = useMemo(() => {
    const { totalItens }: IBalance = coffees.reduce(
      (accumulator: IBalance, coffee: ICoffeProps) => {
        accumulator.totalItens += coffee.price * coffee.quantity

        return accumulator
      },
      {
        totalItens: 0,
        totalCheckout: 0,
      },
    )

    const totalItensFormatted = formatValue(+totalItens.toFixed(2))
    const totalCheckoutFormatted = formatValue(
      +(totalItens + freightPrice).toFixed(2),
    )

    return {
      totalItens: totalItensFormatted,
      totalCheckout: totalCheckoutFormatted,
    }
  }, [coffees])

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
            {coffees.map((coffee) => (
              <CoffeeItemSummary
                key={coffee.id}
                coffee={coffee}
                onAddQuantity={() => handleAddQuantityItem(coffee.id)}
                onReduceQuantity={() => handleReduceQuantityItem(coffee.id)}
                onRemoveItem={() => handleRemoveItemFromCart(coffee.id)}
              />
            ))}
          </S.CoffeList>

          <S.SummaryInfo>
            <S.SummaryValue>
              <p>Total de itens</p>
              <p>{totalItens}</p>
            </S.SummaryValue>
            <S.SummaryValue>
              <p>Entrega</p>
              <p>{freightPriceFormatted}</p>
            </S.SummaryValue>
            <S.TotalValue>
              <p>Total</p>
              <p>{totalCheckout}</p>
            </S.TotalValue>
          </S.SummaryInfo>

          <S.ConfirmButton>CONFIRMAR PEDIDO</S.ConfirmButton>
        </S.SumaryContent>
      </S.CheckoutSumaryContainer>
    </S.CheckoutContainer>
  )
}
