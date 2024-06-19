import { 
    createContext, 
    ReactNode, 
    useEffect, 
    useState,
    useReducer
} from 'react';


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
    const [cart, setCart] = useState<Item[]>([])
    let cartSize = cart.reduce((total: number, item: Item) => total + item.amount, 0)   
    
    function formatPrice(price: number) {
        return price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    
    function addItemToCart(coffee: Item) { 
        let updatedCart: Item[] = []
        updatedCart = [...cart, coffee]

        if(cart.length > 0) {
            const itemAlreadyInCart = cart.find (item => item.id === coffee.id)

            if(itemAlreadyInCart) {
                updatedCart = cart.map(item => item.id === coffee.id ? {
                    ...item, amount: item.amount + coffee.amount
                }: item)
            } 
        }
        setCart(updatedCart)
        localStorage.setItem('@coffee-delivery:cart.1.0.0', JSON.stringify(updatedCart))
    }

    function increaseAmount (product: Item) {

        const updatedProduct = {
            ...product,
            amount: product.amount + 1            
        }

        const updatedCart = [...cart]
        const itemIndex = updatedCart.findIndex(item => item.id === updatedProduct.id);

        updatedCart[itemIndex] = updatedProduct
        setCart(updatedCart)  
        localStorage.setItem('@coffee-delivery:cart.1.0.0', JSON.stringify(updatedCart))
    }

    function decreaseAmount (product: Item) {

        if(product.amount > 1) {
            const updatedProduct = {
                ...product,
                amount: product.amount - 1            
            }
    
            const updatedCart = [...cart]
            const itemIndex = updatedCart.findIndex(item => item.id === updatedProduct.id);
    
            updatedCart[itemIndex] = updatedProduct
            setCart(updatedCart)    
            localStorage.setItem('@coffee-delivery:cart.1.0.0', JSON.stringify(updatedCart))
        }   
    }

    function removeItem(product: Item) {
        const updatedCart = cart.filter(item => item.id !== product.id) 
        
        setCart(updatedCart)
        localStorage.setItem('@coffee-delivery:cart.1.0.0', JSON.stringify(updatedCart))
    }

    function clearCart() {
        setCart([])
        cartSize = 0
    }

    useEffect(() => {
        const fetchCartFromLocalStorage = localStorage
            .getItem("@coffee-delivery:cart.1.0.0")
            
        if(fetchCartFromLocalStorage && cart.length === 0) {   
            setCart(JSON.parse(fetchCartFromLocalStorage))
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

