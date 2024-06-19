import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

import { 
    ProductCheckoutButtons, 
    ProductCheckoutContainer 
} from "./styles";

import { Item } from "../../contexts/CartProvider"; 
import { useCart } from "../../hooks/useCart";

interface ProductCheckoutProps {
    product: Item
}


export function ProductCheckout({ product }: ProductCheckoutProps) {
    const { formatPrice, increaseAmount, decreaseAmount, removeItem } = useCart()

    function handleIncreaseAmount(product: Item) {
        event?.preventDefault()
        increaseAmount(product)
    }

    function handleDecreaseAmount(product: Item) {
        event?.preventDefault()
        decreaseAmount(product)
    }

    function handleRemoveItem(product: Item) {
        event?.preventDefault()
        removeItem(product)
    }

    return (
        <ProductCheckoutContainer>
            <img src={product.imgURL} alt={product.alt} />

            <div className="ProductCheckoutButtonsWrapper">
                <h3>{product.name}</h3>

                <ProductCheckoutButtons>
                    <div className="minusAndPlusBtn">
                        <button>
                            <FaPlus onClick={() => {handleIncreaseAmount(product)}}/>
                        </button>
                        <span className="amount">{product.amount}</span>
                        <button>
                            <FaMinus onClick={() => {handleDecreaseAmount(product)}}/>
                        </button>
                    </div>

                    <button className="removeBtn">
                        <FaTrashAlt />
                        <span className="remove" onClick={() => handleRemoveItem(product)}>Remover</span>
                    </button>
                </ProductCheckoutButtons>
            </div>
            
            <span className="price">R$ {formatPrice(product.price * product.amount)}</span>

        </ProductCheckoutContainer>

    )
}