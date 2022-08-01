import { useContext, useEffect, useMemo, useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { NewFormAddress } from './components/NewFormAddress'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CoffeeItemSummary } from './components/CoffeeItemSummary'
import { ICoffeProps } from '../../reducers/checkout/reducers'
import { formatValueToCurrency } from '../../utils/formatValue'
import paymentsJson from '../../data/payments.json'

interface IBalance {
  totalItens: number
  totalCheckout: number
}

interface IPaymentTypeProps {
  type: string
  description: string
}

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'O cep precisa ter no mínimo 8 numeros'),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod.string().min(1, 'Informe o numero da casa'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe o Estado').max(2, 'Informe o Estado'),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export type OrderProps = {
  address: NewAddressFormData
  payment: IPaymentTypeProps
}

export function Checkout() {
  const [payments, setPayments] = useState([] as IPaymentTypeProps[])
  const [paymentSelected, setPaymentSelected] = useState(
    {} as IPaymentTypeProps,
  )
  const freightPrice = 3.5
  const navigate = useNavigate()

  const freightPriceFormatted = useMemo(() => {
    return formatValueToCurrency(freightPrice)
  }, [])

  const {
    coffees,
    increaseItemQuantityInCart,
    decreaseItemQuantityInCart,
    removeItemFromCart,
    deleteCart,
  } = useContext(CheckoutContext)

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  })

  const { handleSubmit, reset, formState } = newAddressForm

  useEffect(() => {
    setPayments(paymentsJson)
  }, [])

  function handleSelectPaymentType(payment: IPaymentTypeProps) {
    setPaymentSelected(payment)
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

  function handleFinishOrder(data: NewAddressFormData) {
    const order: OrderProps = {
      address: data,
      payment: paymentSelected,
    }

    const orderJson = JSON.stringify(order)

    localStorage.setItem('@ignite-desafio:coffee-delivery:order', orderJson)

    deleteCart()

    navigate('/success', { replace: true })
    // navigate({ })
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

    const totalItensFormatted = formatValueToCurrency(+totalItens.toFixed(2))
    const totalCheckoutFormatted = formatValueToCurrency(
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

          <form
            id="addressForm"
            onSubmit={handleSubmit(handleFinishOrder)}
            action=""
          >
            <FormProvider {...newAddressForm}>
              <NewFormAddress />
            </FormProvider>
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
            {payments.map((payment) => (
              <S.RadioBox
                key={payment.type}
                type="button"
                onClick={() => handleSelectPaymentType(payment)}
                isActive={paymentSelected.type === payment.type}
              >
                <CreditCard size={16} />
                <p>{payment.description}</p>
              </S.RadioBox>
            ))}
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

          <S.ConfirmButton type="submit" form="addressForm">
            CONFIRMAR PEDIDO
          </S.ConfirmButton>
        </S.SumaryContent>
      </S.CheckoutSumaryContainer>
    </S.CheckoutContainer>
  )
}
