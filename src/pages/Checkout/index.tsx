import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { IoLocationOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { PiBank } from "react-icons/pi";
import { RiCashLine } from "react-icons/ri";
import { FiDollarSign } from "react-icons/fi";

import { Header } from '../../components/Header';
import { ProductCheckout } from '../../components/ProductCheckout';

import { 
    CheckoutContainer, 
    CheckoutSummary, 
    ClientAddress, 
    ClientInfos, 
    ClientPaymentMethod, 
    InputRadioLabel, 
    OrderSummary, 
    ProductsCheckout,
    Input
} from './styles';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useUser } from '../../hooks/useUser';


const newOrderFormValidationSchema = zod.object({
    city: zod.string().min(1, 'Campo obrigatório.'),
    neighborhood: zod.string().min(1, 'Campo obrigatório.'),
    state: zod.string().min(1, 'Campo obrigatório.').max(2, 'Campo obrigatório.'),
    street: zod.string().min(1, 'Campo obrigatório.'),
    street_number: zod.string().min(1, 'Campo obrigatório.'),
    zip_code: zod.string()
        .regex(/^\d{5}-?\d{3}$/, 'CEP inválido. Deve estar no formato 12345-678 ou 12345678.')
        .transform((val) => val.replace(/(\d{5})(\d{3})/, '$1-$2')),
    street_complement: zod.string().optional(),
    paymentMethod: zod.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro'])
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema> 

export function Checkout() {
    const { cart, formatPrice } = useCart();
    const { storageUserInfo } = useUser();
    const [totalPrice, setTotalPrice] = useState(0)
    const portage = 3.50

    const navigate = useNavigate();    

    /*
        a função formState tem um parâmetro para poder capturar 
        as mensagens de erro definidas no zod. 
    */ 
    const { handleSubmit, register, reset, formState } = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zip_code: '', 
            street: '',   
            neighborhood: '',
            city: '',
            state: '',
            street_complement: '',
        }
    });
    const { errors } = formState

    function handleFinishOrder (data: NewOrderFormData) {
        storageUserInfo(data)     
        reset();
        navigate("/success")
    }
    
    useEffect(() => {
        setTotalPrice(0)
        cart.map(item => {
            setTotalPrice(prevState => prevState + (item.amount * item.price)) 
        })
        
    }, [cart])
    
    return (
        <CheckoutContainer>
            <Header />

            <main>
                <form onSubmit={handleSubmit(handleFinishOrder)}>
                    <ClientInfos>
                        <h2>Complete seu Pedido</h2>

                        <ClientAddress>
                            <div className='addressContainerLabel'>
                                <IoLocationOutline size={22}/>
                                <div>
                                    <h2>Endereço de Entrega</h2>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </div>
                            <div className='inputsContainer'>
                                <div className="inputWithErrorWrapper">
                                    <Input
                                        placeholder="CEP"
                                        type="text"
                                        {...register('zip_code')}
                                        maxLength={9}
                                    />
                                    <p className='errorMsg'>{errors.zip_code?.message}</p>
                                </div>
                                <div className="inputWithErrorWrapper">
                                    <Input
                                        placeholder="Rua"
                                        type="text"
                                        {...register('street')}
   
                                    />
                                    <p className='errorMsg'>{errors.street?.message}</p>
                                </div>
                                
                                <div className='inputsWrapper'>
                                    <div className='inputWithErrorWrapper'>
                                        <Input
                                            placeholder="Número"
                                            type="text"
                                            {...register('street_number')}
                                        />
                                        <p className='errorMsg'>{errors.street_number?.message}</p>
                                    </div>                                    
                                    <Input
                                        placeholder="Complemento"
                                        type="text"
                                        {...register('street_complement')}
                                    />
                                    <span className='formOptionalInput'>Opcional</span>
                                </div>

                                <div className='inputsWrapper'>
                                    <div className="inputWithErrorWrapper">
                                        <Input
                                            placeholder="Bairro"
                                            type="text"
                                            {...register('neighborhood')}
                                        />
                                        <p className='errorMsg'>{errors.neighborhood?.message}</p>
                                    </div>
                                    <div className="inputWithErrorWrapper">
                                        <Input
                                            placeholder="Cidade"
                                            type="text"
                                            {...register('city')}
                                        />
                                        <p className='errorMsg'>{errors.city?.message}</p>
                                    </div>
                                    <div className="inputWithErrorWrapper">
                                        <div>
                                            <Input
                                                placeholder="UF"
                                                type="text"                                                
                                                {...register('state')}
                                                maxLength={2}
                                            />
                                            <p className='errorMsg'>{errors.state?.message}</p>
                                    </div>
                                    </div>
                                </div>
     
                            </div>
                        </ClientAddress>

                        <ClientPaymentMethod>
                            <div className='paymentContainerLabel'>
                                <FiDollarSign size={22}/>
                                <div>
                                    <h2>Pagamento</h2>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </div>
                            <div className='buttonsContainer'>
                            
                                <input 
                                    type='radio'                                     
                                    id="creditCard"
                                    value="Cartão de crédito"
                                    {...register('paymentMethod')} 
                                />                                
                                <InputRadioLabel htmlFor="creditCard">
                                    <CiCreditCard1 size={16}/>
                                    <span>Cartão de crédito</span>
                                </InputRadioLabel>
                            
                                <input 
                                    type='radio' 
                                    id="debitCard"
                                    value="Cartão de débito"
                                    {...register('paymentMethod')} 
                                />
                                <InputRadioLabel htmlFor="debitCard"> 
                                    <PiBank size={16}/> 
                                    <span>Cartão de débito</span>
                                </InputRadioLabel>
                            
                                <input 
                                    type='radio' 
                                    id="cash"
                                    value="Dinheiro"
                                    {...register('paymentMethod')} 
                                />                                
                                <InputRadioLabel htmlFor="cash">
                                    <RiCashLine size={16}/>
                                    <span>Dinheiro</span>
                                </InputRadioLabel>

                               
                            </div>
                            <p className='errorMsg'>{errors.paymentMethod && `Selecione um método de pagamento.`}</p>
                        </ClientPaymentMethod>
                    </ClientInfos>

                    <div>
                        <h2>Cafés selecionados</h2>                       

                        <CheckoutSummary>
                            <ProductsCheckout>
                                {
                                    cart.map((product, index) => {
                                        return <ProductCheckout key={index} product={product} />
                                    })
                                }
                            </ProductsCheckout>
                            <OrderSummary>
                                <div className='titleAndPriceWrapper'>
                                    <span className='titleSummary'>Total de itens</span>
                                    <span className='priceSummary'>R$ {formatPrice(totalPrice)}</span>
                                </div>
                                <div className='titleAndPriceWrapper'>
                                    <span className='titleSummary'>Entrega</span>
                                    <span className='priceSummary'>R$ {formatPrice(portage)}</span>
                                </div>
                                <div className='titleAndPriceWrapper'>
                                    <span className='titleSummary'><strong>Total</strong></span>
                                    <span className='priceSummary'><strong>R$ {formatPrice(totalPrice + portage)}</strong></span>
                                </div>
                            </OrderSummary>
                            
                            <button className='confirmOrder'>Confirmar pedido</button>
                        </CheckoutSummary>

                    </div>
                </form>
            </main>   
        </CheckoutContainer>
    )
}