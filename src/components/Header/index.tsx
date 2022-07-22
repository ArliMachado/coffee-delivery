import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffee from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logoCoffee} alt="" />

      <S.CheckoutInfo>
        <S.LocaleInfo>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </S.LocaleInfo>
        <S.CartInfo>
          <ShoppingCart weight="fill" size={22} />
        </S.CartInfo>
      </S.CheckoutInfo>
    </S.HeaderContainer>
  )
}
