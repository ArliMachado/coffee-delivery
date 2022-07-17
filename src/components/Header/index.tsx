import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logoCoffee from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  const [isHome, setIsHome] = useState(false)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true)
    }
  }, [location.pathname])

  return (
    <S.HeaderContainer isHomePage={isHome}>
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
