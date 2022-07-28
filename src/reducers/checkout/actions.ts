import { ICoffeProps } from './reducers'

export enum Actiontypes {
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_QUANTITY_ITEM_IN_CART = 'INCREASE_QUANTITY_ITEM_IN_CART',
  DECREASE_QUANTITY_ITEM_IN_CART = 'DECREASE_QUANTITY_ITEM_IN_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export function addItemToCartAction(newCoffee: ICoffeProps) {
  return {
    type: Actiontypes.ADD_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function increaseQuantityItemInCartAction(id: number) {
  return {
    type: Actiontypes.INCREASE_QUANTITY_ITEM_IN_CART,
    payload: {
      id,
    },
  }
}
export function decreaseQuantityItemInCartAction(id: number) {
  return {
    type: Actiontypes.DECREASE_QUANTITY_ITEM_IN_CART,
    payload: {
      id,
    },
  }
}

export function removeItemFromCartAction(id: number) {
  return {
    type: Actiontypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  }
}
