import { produce } from 'immer';

import { ActionTypes } from "./actions"

export interface Item {
    id: number
    name: string
    imgURL: string
    alt?: string
    price: number
    amount: number
}

export function cartReducer(state: Item[], action: any) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART:
            return produce(state, draft => {
                const itemAlreadyInCart = draft.find(item => item.id === action.payload.coffee.id);

                if (itemAlreadyInCart) {
                    
                    itemAlreadyInCart.amount += action.payload.coffee.amount;
                } else {
                    
                    draft.push(action.payload.coffee);
                }
            });    

        case ActionTypes.REMOVE_ITEM:
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id === action.payload.coffee.id);
                if (index !== -1) {
                    draft.splice(index, 1);
                }
            });
        
        case ActionTypes.INCREASE_AMOUNT:
            return produce(state, draft => {
                const item = draft.find(item => item.id === action.payload.coffee.id);
                if (item) {
                    item.amount += 1;
                }
            });

        case ActionTypes.DECREASE_AMOUNT: 
            return produce(state, draft => {
                const item = draft.find(item => item.id === action.payload.coffee.id);
                if (item && item.amount > 1) {
                    item.amount -= 1;
                }
            });

        case ActionTypes.CLEAR_CART: 
            return [];

        default:
            return state

    }
}
