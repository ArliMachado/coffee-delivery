import { ShoppingCartSimple } from 'phosphor-react'
import { QuantityButtons } from '../../../../components/QuantityButtons'
import * as S from './styles'

interface ICoffeProps {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: string
  quantity: number
}

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
  function handleAddQuantity() {
    onAddQuantity()
  }
  function handleReduceQuantity() {
    onReduceQuantity()
  }

  function handleAddToCart(coffee: ICoffeProps) {
    onAddToCart(coffee)
  }

  return (
    <S.CoffeeContainer>
      <img src={coffee.image} alt="" />
      <ul>
        {coffee.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <strong>{coffee.title}</strong>
      <p>{coffee.description}</p>
      <S.CartContent>
        <span>
          R$
          <strong>{coffee.price}</strong>
        </span>
        <S.CartButtons>
          <QuantityButtons
            onAddQuantity={handleAddQuantity}
            onReduceQuantity={handleReduceQuantity}
            size="medium"
            quantity={coffee.quantity}
          />

          <S.CartButton onClick={() => handleAddToCart(coffee)}>
            <ShoppingCartSimple weight="fill" size={22} />
          </S.CartButton>
        </S.CartButtons>
      </S.CartContent>
    </S.CoffeeContainer>
  )
}
