import { createContext, ReactNode, useEffect, useMemo, useReducer } from 'react'
import {
  addItemToCartAction,
  increaseQuantityItemInCartAction,
  decreaseQuantityItemInCartAction,
  removeItemFromCartAction,
  deleteCartAction,
} from '../reducers/checkout/actions'
import { checkoutReducer, ICoffeProps } from '../reducers/checkout/reducers'

interface ICheckoutContextProps {
  coffees: ICoffeProps[]
  totalItensCheckout: number
  addToCart: (coffee: ICoffeProps) => void
  increaseItemQuantityInCart: (id: number) => void
  decreaseItemQuantityInCart: (id: number) => void
  removeItemFromCart: (id: number) => void
  deleteCart: () => void
}

interface ICheckoutContextProviderProps {
  children: ReactNode
}

export const CheckoutContext = createContext({} as ICheckoutContextProps)

export function CheckoutcontextProvider({
  children,
}: ICheckoutContextProviderProps) {
  const [checkoutState, dispatch] = useReducer(
    checkoutReducer,
    {
      coffees: [],
    },

    // TODO corrigir quando remover a força o localStorage
    (initial) => {
      let storedStateAsJSON

      const storedStateString = localStorage.getItem(
        '@ignite-desafio:coffee-delivery',
      )

      if (storedStateString) {
        storedStateAsJSON = JSON.parse(storedStateString)
      }

      return storedStateAsJSON || initial
    },
  )

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

  function deleteCart() {
    dispatch(deleteCartAction())
    localStorage.removeItem('@ignite-desafio:coffee-delivery')
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)
    localStorage.setItem('@ignite-desafio:coffee-delivery', stateJSON)
  }, [checkoutState])

  return (
    <CheckoutContext.Provider
      value={{
        coffees,
        totalItensCheckout,
        addToCart,
        increaseItemQuantityInCart,
        decreaseItemQuantityInCart,
        removeItemFromCart,
        deleteCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
