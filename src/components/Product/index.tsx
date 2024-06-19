import { useState } from "react";

import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

import { 
    ProductButtons, 
    ProductContainer, 
    ProductInfos, 
    ProductTags, 
    Tag 
} from "./syles";
import { useCart } from "../../hooks/useCart";


interface CoffeeImg {
    url: string;
    alt?: string;
}
  
export interface Coffee {
    id: number;
    tags: string[];
    img: CoffeeImg;
    name: string;
    description: string;
    price: number;
}

interface ProductProps {
    product: Coffee;
}

export function Product({ product }: ProductProps) {
    const [amount, setAmount] = useState<number>(1)
    const { addItemToCart, formatPrice } = useCart();

    function handleIncreaseAmount () {
        setAmount(prevState => prevState + 1)        
    }

    function handleDecreaseAmount () {
        if(amount > 1) {
            setAmount(prevState => prevState - 1)
        } 
    }

    function handleAddItemToCart(product: Coffee, amount: number) {        
        addItemToCart({
            id: product.id,
            name: product.name,
            imgURL: product.img.url,
            alt: product.img.alt,
            price: product.price,
            amount
        })
        setAmount(1)
    }

    return (
        <ProductContainer>
            <img src={product.img.url} alt={product.img.alt} />
            <figcaption>

                <ProductInfos>
                    <ProductTags>
                        { 
                            product.tags.map((tag, index) => {
                                return <Tag key={String(index)}> {tag} </Tag>
                            })
                        }
                    </ProductTags>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </ProductInfos>

                <footer>                   
                    <span className="price">R$ <strong>{formatPrice(product.price * amount)}</strong></span>
                    <ProductButtons>
                        <div className="minusAndPlusBtn">
                            <button onClick={handleIncreaseAmount}><FaPlus size={14}/></button>
                            <span>{amount}</span>
                            <button onClick={handleDecreaseAmount}><FaMinus size={14}/></button>
                        </div>
                        <button className="shoppingCartBtn" onClick={() => handleAddItemToCart(product, amount)}><FaShoppingCart size={16}/></button>
                    </ProductButtons>
                </footer>
            </figcaption>
        </ProductContainer>
    )

}