import { ShoppingCartSimple } from 'phosphor-react'
import { useMemo } from 'react'
import { QuantityButtons } from '../../../../components/QuantityButtons'
import { ICoffeProps } from '../../../../reducers/checkout/reducers'
import formatValue from '../../../../utils/formatValue'
import * as S from './styles'

interface ICoffeItemProps {
  coffee: ICoffeProps
  onAddQuantity: () => void
  onReduceQuantity: () => void
  onAddToCart: (coffee: ICoffeProps) => void
}

export function CoffeeItem({
  coffee,
  onAddQuantity,
  onReduceQuantity,
  onAddToCart,
}: ICoffeItemProps) {
  const { image, tags, title, description, price, quantity } = coffee

  function handleAddQuantity() {
    onAddQuantity()
  }
  function handleReduceQuantity() {
    onReduceQuantity()
  }

  function handleAddToCart(coffee: ICoffeProps) {
    onAddToCart(coffee)
  }

  const itemPriceFormatted = useMemo(() => {
    return formatValue(price)
  }, [price])

  return (
    <S.CoffeeContainer>
      <img src={image} alt="" />
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <strong>{title}</strong>
      <p>{description}</p>
      <S.CartContent>
        <span>
          R$
          <strong>{price}</strong>
        </span>
        <S.CartButtons>
          <QuantityButtons
            onAddQuantity={handleAddQuantity}
            onReduceQuantity={handleReduceQuantity}
            size="medium"
            quantity={quantity}
          />

          <S.CartButton onClick={() => handleAddToCart(coffee)}>
            <ShoppingCartSimple weight="fill" size={22} />
          </S.CartButton>
        </S.CartButtons>
      </S.CartContent>
    </S.CoffeeContainer>
  )
}
