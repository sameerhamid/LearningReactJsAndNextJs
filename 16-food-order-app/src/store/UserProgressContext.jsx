import { createContext } from "react";

const UserProgressContext = createContext({
    porgress: 'cart' || 'checkout', // 'cart' , 'checkout'
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
})


export const UserProgressContextProvider = ({ children }) => {
    const [userProgress, setUserProgress] = useState('')

    const showCart = () => {
        setUserProgress('cart')
    }

    const hideCart = () => {
        setUserProgress('')
    }
    const showCheckout = () => {
        setUserProgress('checkout')
    }
    const hideCheckout = () => {
        setUserProgress('')
    }
    const contextVal = {
        porgress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    }
    return <UserProgressContext.Provider value={contextVal}>
        {children}
    </UserProgressContext.Provider>
}

export default UserProgressContext;