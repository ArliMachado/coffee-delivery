import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

interface IQuantityProps {}

interface IQuantityButtonsProps {
  size: 'small' | 'medium'
  quantity: number
  onAddQuantity: () => void
  onReduceQuantity: () => void
}

export function QuantityButtons({
  size,
  quantity,
  onAddQuantity,
  onReduceQuantity,
}: IQuantityButtonsProps) {
  return (
    <S.Container size={size}>
      <button onClick={() => onReduceQuantity()}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{quantity}</span>

      <button onClick={() => onAddQuantity()}>
        <Plus weight="bold" size={14} />
      </button>
    </S.Container>
  )
}
