import { Banner } from './components/Banner'

import coffeesJson from '../../data/coffees.json'

import * as S from './styles'
import { CoffeeItem } from './components/CoffeeItem'
import { useContext, useEffect, useState } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { ICoffeProps } from '../../reducers/checkout/reducers'

export function Home() {
  const [coffees, setCoffees] = useState<ICoffeProps[]>([])
  const { addToCart } = useContext(CheckoutContext)

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

  function handleAddToCart(newCoffee: ICoffeProps) {
    addToCart({ ...newCoffee })

    const coffeesUpdated = coffees.map((coffee) => {
      if (coffee.id === newCoffee.id) {
        coffee.quantity = 1
      }
      return coffee
    })

    setCoffees(coffeesUpdated)
  }

  return (
    <S.HomeContainer>
      <Banner />
      <S.CoffeesContent>
        <strong>Nossos cafés</strong>

        <S.CoffeesList>
          {coffees.map((coffee) => (
            <CoffeeItem
              onAddToCart={() => {
                handleAddToCart(coffee)
              }}
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
