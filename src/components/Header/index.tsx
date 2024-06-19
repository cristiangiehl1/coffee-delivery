import { FaShoppingCart } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";

import { HeaderContainer } from "./styles";
import coffeeLogo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useUser } from "../../hooks/useUser";

export function Header() {
    const { cartSize } = useCart();
    const { userData } = useUser();
   
    const navigate = useNavigate();

    function handleBack() {
        navigate("/");
    }

    function handleCheckout() {
        navigate("/checkout");
    }

    return (

        <HeaderContainer>
            
            <button className="logoBtn" onClick={handleBack}>
                <img 
                    src={coffeeLogo} 
                    alt="Logotipo da cafeteria um copo de café com uma imagem de foguete no fundo" />
            </button>
            
            <div className="headerButtonsWrapper">
                <button className="address">
                    <HiMapPin size={22}/>
                    { userData ?
                        (
                            <span>{userData.city}, {userData.state}</span>
                        ) : <span>Localização</span>
                    }
                </button>
                <button className='shoppingCart'>
                    <FaShoppingCart onClick={handleCheckout} size={22}/>
                    { cartSize > 0 &&
                        <span className="orderAmount">{cartSize}</span>
                    }
                </button>
            </div>

        </HeaderContainer>
    )
}