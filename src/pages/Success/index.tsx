import { useEffect, useState } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import successImg from '../../assets/successImage.svg'
import { OrderProps } from '../Checkout'
import * as S from './styles'

export function Success() {
  const [order, setOrder] = useState(() => {
    const orderJson = localStorage.getItem(
      '@ignite-desafio:coffee-delivery:order',
    )
    let parsedOrder
    if (orderJson) {
      parsedOrder = JSON.parse(orderJson)
    }

    return parsedOrder || {}
  })

  const { address, payment } = order

  return (
    <S.Container>
      <S.TitleInfo>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </S.TitleInfo>

      <S.OrderContent>
        <S.OrderInfo>
          <S.OrderInfoSummary>
            <S.IconContent color="purple">
              <MapPin size={16} weight="fill" />
            </S.IconContent>
            <span>
              <p>
                Entrega em{' '}
                <strong>{`${address.street}, ${address.number}`}</strong>
              </p>
              <p>{`${address.district} - ${address.city}, ${address.state}`}</p>
            </span>
          </S.OrderInfoSummary>

          <S.OrderInfoSummary>
            <S.IconContent color="yellow">
              <Timer size={16} weight="fill" />
            </S.IconContent>

            <span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </span>
          </S.OrderInfoSummary>

          <S.OrderInfoSummary>
            <S.IconContent color="yellow-dark">
              <CurrencyDollar size={16} />
            </S.IconContent>
            <span>
              <p>Pagamento na entrega</p>
              <strong>{payment.description}</strong>
            </span>
          </S.OrderInfoSummary>
        </S.OrderInfo>
        <img src={successImg} alt="" />
      </S.OrderContent>
    </S.Container>
  )
}
