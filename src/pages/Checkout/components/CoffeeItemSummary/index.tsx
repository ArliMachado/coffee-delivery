import { Trash } from 'phosphor-react'
import { QuantityButtons } from '../../../../components/QuantityButtons'
import * as S from './styles'

interface ICoffeeItemSummary {
  image: string
  title: string
  quantity: number
  price: string
}

export function CoffeeItemSummary({
  image,
  title,
  quantity,
  price,
}: ICoffeeItemSummary) {
  return (
    <S.Container>
      <img src={image} alt="" />
      <S.ProductContent>
        <S.ProductInfo>
          <p>{title}</p>
          <S.Priceinfo>{price}</S.Priceinfo>
        </S.ProductInfo>
        <S.ButtonsContent>
          <QuantityButtons size="small" />
          <S.RemoveButton>
            <Trash size={16} />
            REMOVER
          </S.RemoveButton>
        </S.ButtonsContent>
      </S.ProductContent>
    </S.Container>
  )
}
