import * as S from './styles'
import coffeeImage from '../../../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerBackgroud />
      <S.BannerContent>
        <S.BannerInfo>
          <S.BannerTitle>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </S.BannerTitle>
          <S.BannerItens>
            <S.BannerItem itemColor="yellowDark">
              <span>
                <ShoppingCart weight="fill" size={16} />
              </span>
              <p>Compra simples e segura</p>
            </S.BannerItem>
            <S.BannerItem itemColor="gray">
              <span>
                <Package weight="fill" size={16} />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </S.BannerItem>
            <S.BannerItem itemColor="yellow">
              <span>
                <Timer weight="fill" size={16} />
              </span>
              <p>Entrega rápida e rastreada</p>
            </S.BannerItem>

            <S.BannerItem itemColor="purple">
              <span>
                <Coffee weight="fill" size={16} />
              </span>
              <p>O café chega fresquinho até você</p>
            </S.BannerItem>
          </S.BannerItens>
        </S.BannerInfo>

        <img src={coffeeImage} alt="" />
      </S.BannerContent>
    </S.BannerContainer>
  )
}
