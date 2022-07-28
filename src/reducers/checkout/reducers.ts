import produce from 'immer'
import { Actiontypes } from './actions'

export interface ICoffeProps {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: string
  quantity: number
}

interface ICheckoutStateProps {
  coffees: ICoffeProps[]
}

export function checkoutReducer(state: ICheckoutStateProps, action: any) {
  switch (action.type) {
    case Actiontypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.newCoffee)
      })

    case Actiontypes.INCREASE_QUANTITY_ITEM_IN_CART: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      if (currentCoffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffees[currentCoffeeIndex].quantity += 1
      })
    }

    case Actiontypes.DECREASE_QUANTITY_ITEM_IN_CART: {
      const currentCoffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      if (currentCoffeeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        const hasMinimumQuantity =
          draft.coffees[currentCoffeeIndex].quantity < 0

        if (hasMinimumQuantity) {
          draft.coffees[currentCoffeeIndex].quantity -= 1
        }
      })
    }

    case Actiontypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.coffees.filter((coffee) => coffee.id !== action.payload.id)
      })

    default:
      return state
  }
}
