import { Trash } from 'phosphor-react'
import { useMemo } from 'react'
import { QuantityButtons } from '../../../../components/QuantityButtons'
import { formatValueToCurrency } from '../../../../utils/formatValue'
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
  onRemoveItem: () => void
}

export function CoffeeItemSummary({
  coffee,
  onAddQuantity,
  onReduceQuantity,
  onRemoveItem,
}: ICoffeeItemSummary) {
  const { image, title, price, quantity } = coffee

  function handleAddQuantity() {
    onAddQuantity()
  }

  function handleReduceQuantity() {
    onReduceQuantity()
  }

  function handleRemoveItem() {
    onRemoveItem()
  }

  const itemPriceFormatted = useMemo(() => {
    return formatValueToCurrency(price)
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
          <S.RemoveButton onClick={handleRemoveItem}>
            <Trash size={16} />
            REMOVER
          </S.RemoveButton>
        </S.ButtonsContent>
      </S.ProductContent>
    </S.Container>
  )
}
