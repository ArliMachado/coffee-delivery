import { createContext, ReactNode, useMemo, useReducer } from 'react'
import {
  addItemToCartAction,
  increaseQuantityItemInCartAction,
  decreaseQuantityItemInCartAction,
  removeItemFromCartAction,
} from '../reducers/checkout/actions'
import { checkoutReducer, ICoffeProps } from '../reducers/checkout/reducers'

interface ICheckoutContextProps {
  coffees: ICoffeProps[]
  totalItensCheckout: number
  addToCart: (coffee: ICoffeProps) => void
  increaseItemQuantityInCart: (id: number) => void
  decreaseItemQuantityInCart: (id: number) => void
  removeItemFromCart: (id: number) => void
}

interface ICheckoutContextProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({} as ICheckoutContextProps)

export function CheckoutcontextProvider({
  children,
}: ICheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(checkoutReducer, {
    coffees: [],
  })

  const { coffees } = checkoutState

  const totalItensCheckout = useMemo(() => {
    const total = coffees.reduce((acc, coffee) => {
      return acc + coffee.quantity
    }, 0)
    return total
  }, [coffees])

  function addToCart(data: ICoffeProps) {
    dispatch(addItemToCartAction(data))
  }
  function increaseItemQuantityInCart(id: number) {
    dispatch(increaseQuantityItemInCartAction(id))
  }

  function decreaseItemQuantityInCart(id: number) {
    dispatch(decreaseQuantityItemInCartAction(id))
  }

  function removeItemFromCart(id: number) {
    dispatch(removeItemFromCartAction(id))
  }

  return (
    <CheckoutContext.Provider
      value={{
        coffees,
        totalItensCheckout,
        addToCart,
        increaseItemQuantityInCart,
        decreaseItemQuantityInCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
