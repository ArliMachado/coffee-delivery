import { useContext, useEffect, useState } from 'react'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffee from '../../assets/logo.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import * as S from './styles'

export function Header() {
  const { totalItensCheckout } = useContext(CheckoutContext)

  const totalItens = totalItensCheckout

  const totalItensVisible = totalItens > 0

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
            {totalItensVisible && <span>{totalItens}</span>}
          </S.CartInfo>
        </NavLink>
      </S.CheckoutInfo>
    </S.HeaderContainer>
  )
}
