import { Item } from "./cart";

export enum ActionTypes {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    INCREASE_AMOUNT = 'INCREASE_AMOUNT',
    DECREASE_AMOUNT = 'DECREASE_AMOUNT',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CLEAR_CART = 'CLEAR_CART',
}

export type Actions =
  | {
      type: 
      | ActionTypes.ADD_ITEM_TO_CART
      | ActionTypes.INCREASE_AMOUNT
      | ActionTypes.DECREASE_AMOUNT
      | ActionTypes.REMOVE_ITEM
      payload: {
        coffee: Item
      }
    }
  | {
      type: ActionTypes.CLEAR_CART
    }


export function addItemToCartAction(coffee: Item) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            coffee
        },
    } satisfies Actions
}

export function increaseAmountAction(coffee: Item) {
    return {
        type: ActionTypes.INCREASE_AMOUNT,
        payload: {
            coffee
        }
    } satisfies Actions
}

export function decreaseAmountAction(coffee: Item) {
    return {
        type: ActionTypes.DECREASE_AMOUNT,
        payload: {
            coffee
        }
    } satisfies Actions
}

export function removeItemAction(coffee: Item) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            coffee
        }
    } satisfies Actions
}

export function clearCartAction() {
    return {
        type: ActionTypes.CLEAR_CART,
    } satisfies Actions
}

