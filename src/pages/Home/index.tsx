import { Banner } from './components/Banner'

import coffeesJson from '../../data/coffees.json'

import * as S from './styles'
import { CoffeeItem } from './components/CoffeeItem'
import { useEffect, useState } from 'react'

type CoffeeProps = typeof coffeesJson

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeProps>([])

  useEffect(() => {
    function loadCoffees() {
      setCoffees(coffeesJson)
    }

    loadCoffees()
  }, [])

  function addCoffeeQuantity(id: number) {
    const coffeesUpdated = coffees.map((coffee) => {
      if (coffee.id === id) {
        coffee.quantity += 1
      }
      return coffee
    })

    setCoffees(coffeesUpdated)
  }

  function reduceCoffeeQuantity(id: number) {
    const coffeesUpdated = coffees.map((coffee) => {
      if (coffee.id === id && coffee.quantity > 1) {
        coffee.quantity -= 1
      }
      return coffee
    })

    setCoffees(coffeesUpdated)
  }

  function handleAddToCart(coffee: CoffeeProps) {}

  return (
    <S.HomeContainer>
      <Banner />
      <S.CoffeesContent>
        <strong>Nossos cafés</strong>

        <S.CoffeesList>
          {coffees.map((coffee) => (
            <CoffeeItem
              onAddToCart={() => {}}
              key={coffee.id}
              coffee={coffee}
              onAddQuantity={() => addCoffeeQuantity(coffee.id)}
              onReduceQuantity={() => reduceCoffeeQuantity(coffee.id)}
            />
          ))}
        </S.CoffeesList>
      </S.CoffeesContent>
    </S.HomeContainer>
  )
}
