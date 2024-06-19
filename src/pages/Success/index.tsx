import { IoLocationSharp } from "react-icons/io5";
import { PiTimerFill } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";



import { 
    ClientOrderSummary, 
    ClientOrderSummaryWrapper, 
    SuccessContainer 
} from './styles'

import { Header } from '../../components/Header'
import { useUser } from "../../hooks/useUser";


export function Success() {
    const { userData } = useUser();


    return (
        <SuccessContainer>
            <Header />
            <main>
                <div>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                { userData &&                    
                    <ClientOrderSummary> 

                       <ClientOrderSummaryWrapper $iconbgcolor="purple">
                            <div className="iconContainer">
                                <IoLocationSharp size={16}/>
                            </div>
                            <div className="description">
                                <span>Entrega em <strong>{userData.street}, {userData.street_number}</strong></span>
                                <span>{userData.neighborhood} - {userData.city}, {userData.state}</span>
                            </div>
                        </ClientOrderSummaryWrapper> 

                        <ClientOrderSummaryWrapper $iconbgcolor="yellow">
                            <div className="iconContainer">
                                <PiTimerFill size={16}/>
                            </div>
                            <div className="description">
                                <span>Previsão de entrega</span>
                                <span><strong>20 min - 30 min</strong></span>
                            </div>

                        </ClientOrderSummaryWrapper>

                        <ClientOrderSummaryWrapper $iconbgcolor="yellowDark">
                            <div className="iconContainer">
                                <FaDollarSign size={16}/>
                            </div>
                            <div className="description">
                                <span>Pagamento na entrega</span>
                                <span><strong>{userData.paymentMethod}</strong></span>
                            </div>

                        </ClientOrderSummaryWrapper>
                    </ClientOrderSummary>
                }
                </div>

                <img 
                    src="./src/assets/order_fineshed_img.png" 
                    alt="Homem dirigindo uma moto com um pedido de entrega" />
            </main>

        </SuccessContainer>
    )
}