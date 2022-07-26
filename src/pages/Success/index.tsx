import * as S from './styles'

import successImg from '../../assets/successImage.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </span>
          </S.OrderInfoSummary>
        </S.OrderInfo>
        <img src={successImg} alt="" />
      </S.OrderContent>
    </S.Container>
  )
}
