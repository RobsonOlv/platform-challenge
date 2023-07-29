import { ReactNode, createContext, useEffect, useState } from "react"
import { onAuthStateChanged, User } from 'firebase/auth'
import FirebaseService, { auth } from 'utils/services/firebase.service'

type ContextType = {
    userData: User | null
    authModalActive: boolean
    signUpActive: boolean
    login: (email: string, password: string) => Promise<string>
    googleLogin: () => Promise<string>
    logout: () => void
    register: (email: string, password: string) => Promise<string>
    toggleAuthModal: (value: boolean) => void
    toggleSignUp: (value: boolean) => void
}

interface Props extends Partial<ContextType> {
    children: ReactNode
  }


export const AuthContext = createContext<ContextType>({
    userData: null,
    authModalActive: false,
    signUpActive: false,
    login: async () => '',
    googleLogin: async () => '',
    logout: () => undefined,
    register: async () => '',
    toggleAuthModal: () => undefined,
    toggleSignUp: () => undefined
})

const AuthContextProvider = ({ children, ...props }: Props) => {
    const [authModalActive, setAuthModalActive] = useState(false)
    const [signUpActive, setSignUpActive] = useState(false)
    const [userData, setUserData] = useState<User | null>(null)

    const toggleAuthModal = (value: boolean) => {
        setAuthModalActive(value)
    }
    
    const toggleSignUp = (value: boolean) => {
        setSignUpActive(value)
    }

    const login = async (email: string, password: string) => {
        const message: string = await FirebaseService.login(email, password)

        if(!message) {
            toggleAuthModal(false)
            return ''
        }

        return message
    }

    const googleLogin = async () => {
        const message: string = await FirebaseService.googleLogin()
        if (!message) {
            toggleAuthModal(false)
            return ''
        }

        return message
    }

    const logout = () => {
        try {
            FirebaseService.logout()
            setUserData(null)
        } catch(e) {
            console.error(e)
        }
    }

    const register = async (email: string, password: string) => {
        const message: string = await FirebaseService.register(email, password)

        if(!message) {
            toggleSignUp(false)
            return ''
        }

        return message
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUserData(currentUser)
        })
    }, [])

    return (
        <AuthContext.Provider
        value={{
            userData,
            authModalActive,
            signUpActive,
            login,
            googleLogin,
            logout,
            register,
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

