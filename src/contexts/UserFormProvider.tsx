import { 
    createContext, 
    ReactNode, 
    useState 
} from 'react';
import { useCart } from '../hooks/useCart';


interface userInfo {
    city: string
    neighborhood: string
    state: string
    street: string
    street_number: string
    zip_code: string
    street_complement?: string
    paymentMethod: 'Cartão de crédito' |  'Cartão de débito' | 'Dinheiro'
}

interface UserFormContextType {
    userData: userInfo | null
    storageUserInfo: (info: userInfo) => void 
}

interface CartContextProviderProps {
    children: ReactNode
}


export const UserFormContext = createContext({} as UserFormContextType)


export function UserFormProvider({ children }: CartContextProviderProps) {
    const [userData, setUserData] = useState<userInfo | null>(null)
    const { clearCart } = useCart();

    function storageUserInfo(info: userInfo) {
        setUserData(info)
        clearCart()
        localStorage.removeItem('@coffee-delivery:cart.1.0.0')
    }

    return (
        <UserFormContext.Provider value={{
            userData,
            storageUserInfo
        }}>
            {children}
        </UserFormContext.Provider>
    )
}
