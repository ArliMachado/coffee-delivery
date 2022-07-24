import { ShoppingCartSimple } from 'phosphor-react'
import { QuantityButtons } from '../../../../components/QuantityButtons'
import * as S from './styles'

interface ICoffeItemProps {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: string
  quantity: number
}

export function CoffeeItem({
  image,
  tags,
  title,
  description,
  price,
  quantity,
}: ICoffeItemProps) {
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
          <QuantityButtons />

          <S.CartButton>
            <ShoppingCartSimple weight="fill" size={22} />
          </S.CartButton>
        </S.CartButtons>
      </S.CartContent>
    </S.CoffeeContainer>
  )
}
