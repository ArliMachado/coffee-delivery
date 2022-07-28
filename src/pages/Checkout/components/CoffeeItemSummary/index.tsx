import { Trash } from 'phosphor-react'
import { useMemo } from 'react'
import { QuantityButtons } from '../../../../components/QuantityButtons'
import formatValue from '../../../../utils/formatValue'
import * as S from './styles'

interface ICoffeeSummary {
  image: string
  title: string
  quantity: number
  price: number
}
interface ICoffeeItemSummary {
  coffee: ICoffeeSummary
  onAddQuantity: () => void
  onReduceQuantity: () => void
}

export function CoffeeItemSummary({
  coffee,
  onAddQuantity,
  onReduceQuantity,
}: ICoffeeItemSummary) {
  const { image, title, price, quantity } = coffee

  function handleAddQuantity() {
    onAddQuantity()
  }

  function handleReduceQuantity() {
    onReduceQuantity()
  }

  const itemPriceFormatted = useMemo(() => {
    return formatValue(price)
  }, [price])

  return (
    <S.Container>
      <img src={image} alt="" />
      <S.ProductContent>
        <S.ProductInfo>
          <p>{title}</p>
          <S.Priceinfo>{itemPriceFormatted}</S.Priceinfo>
        </S.ProductInfo>
        <S.ButtonsContent>
          <QuantityButtons
            onAddQuantity={handleAddQuantity}
            onReduceQuantity={handleReduceQuantity}
            quantity={quantity}
            size="small"
          />
          <S.RemoveButton>
            <Trash size={16} />
            REMOVER
          </S.RemoveButton>
        </S.ButtonsContent>
      </S.ProductContent>
    </S.Container>
  )
}
