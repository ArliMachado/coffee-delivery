import { Banner } from './components/Banner'

import coffees from '../../data/coffees.json'

import * as S from './styles'
import { CoffeeItem } from './components/CoffeeItem'

export function Home() {
  return (
    <S.HomeContainer>
      <Banner />
      <S.CoffeesContent>
        <strong>Nossos cafés</strong>

        <S.CoffeesList>
          {coffees.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
              id={coffee.id}
              description={coffee.description}
              image={coffee.image}
              tags={coffee.tags}
              title={coffee.title}
              quantity={coffee.quantity}
              price={coffee.price}
            />
          ))}
        </S.CoffeesList>
      </S.CoffeesContent>
    </S.HomeContainer>
  )
}
