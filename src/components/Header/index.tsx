import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <S.CheckoutInfo>
        <S.LocaleInfo>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </S.LocaleInfo>
        <NavLink to="/checkout">
          <S.CartInfo>
            <ShoppingCart weight="fill" size={22} />
            <span>3</span>
          </S.CartInfo>
        </NavLink>
      </S.CheckoutInfo>
    </S.HeaderContainer>
  )
}
