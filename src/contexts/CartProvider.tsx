import { 
    createContext, 
    ReactNode, 
    useEffect, 
    useReducer
} from 'react';

import { cartReducer } from '../reducers/cart';
import { 
    addItemToCartAction, 
    clearCartAction, 
    decreaseAmountAction, 
    increaseAmountAction, 
    removeItemAction 
} from '../reducers/actions';


export interface Item {
    id: number
    name: string
    imgURL: string
    alt?: string
    price: number
    amount: number
}

interface CartContextType {
    cart: Item[]
    cartSize: number
    formatPrice: (price: number) => string
    addItemToCart: (coffee: Item) => void
    increaseAmount: (coffee: Item) => void
    decreaseAmount: (coffee: Item) => void
    removeItem: (coffee: Item) => void
    clearCart: () => void
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode
}

export function CartProvider ({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(cartReducer, [], 
        (initialState) => {
            const storedStateAsJson = localStorage
                .getItem('@coffee-delivery:cart.1.0.0')

            if(storedStateAsJson) {
                return JSON.parse(storedStateAsJson)
            }
            return initialState
    })

    let cartSize = 0
    
    if (cart) {
        cartSize = cart.reduce((total: number, item: Item) => total + item.amount, 0)   
    }


    function formatPrice(price: number) {
        return price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    function addItemToCart(coffee: Item) {
        dispatch(addItemToCartAction(coffee));
    }

    function increaseAmount (product: Item) {
        dispatch(increaseAmountAction(product))
    }

    function decreaseAmount (product: Item) {
        dispatch(decreaseAmountAction(product)) 
    }

    function removeItem(product: Item) {
        dispatch(removeItemAction(product))
    }

    function clearCart() {
        dispatch(clearCartAction())
    }

    useEffect(() => {

        if(cart) {
            const cartJSON = JSON.stringify(cart)
            localStorage.setItem('@coffee-delivery:cart.1.0.0', cartJSON)
        }
            
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            cartSize,
            addItemToCart,
            formatPrice,
            increaseAmount,
            decreaseAmount,
            removeItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

