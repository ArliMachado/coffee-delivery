import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

interface IQuantityButtonsProps {
  size: 'small' | 'medium'
}

export function QuantityButtons({ size }: IQuantityButtonsProps) {
  return (
    <S.Container size={size}>
      <button>
        <Minus weight="bold" size={14} />
      </button>
      <span>1</span>

      <button>
        <Plus weight="bold" size={14} />
      </button>
    </S.Container>
  )
}
