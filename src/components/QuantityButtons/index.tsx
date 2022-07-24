import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

export function QuantityButtons() {
  return (
    <S.Container>
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
