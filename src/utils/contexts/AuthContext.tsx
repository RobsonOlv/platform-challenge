import { ReactNode, createContext, useState } from "react"

type ContextType = {
    authModalActive: boolean
    signUpActive: boolean
    toggleAuthModal: (value: boolean) => void
    toggleSignUp: (value: boolean) => void
}

interface Props extends Partial<ContextType> {
    children: ReactNode
  }


export const AuthContext = createContext<ContextType>({
    authModalActive: false,
    signUpActive: false,
    toggleAuthModal: () => undefined,
    toggleSignUp: () => undefined
})

const AuthContextProvider = ({ children, ...props }: Props) => {
    const [authModalActive, setAuthModalActive] = useState(false)
    const [signUpActive, setSignUpActive] = useState(false)

    const toggleAuthModal = (value: boolean) => {
        setAuthModalActive(value)
    }
    
    const toggleSignUp = (value: boolean) => {
        setSignUpActive(value)
    }

    return (
        <AuthContext.Provider
        value={{
            authModalActive,
            signUpActive,
            toggleAuthModal,
            toggleSignUp,
            ...props,
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

