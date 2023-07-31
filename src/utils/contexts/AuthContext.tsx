import { ReactNode, createContext, useEffect, useState } from "react"
import { onAuthStateChanged, User } from 'firebase/auth'
import FirebaseService, { auth } from 'utils/services/firebase.service'
import { Plan } from "utils/typings/interfaces"

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
    writeUserData: (purchasedPlanID: string) => Promise<string>
    getUserSubscription: () => Promise<{ purchasedPlan: string, error: string }>
    getPlans: () => Promise<{ plans: Plan[], error: string }>
}

interface Props extends Partial<ContextType> {
    children: ReactNode
  }

const getUserSubscriptionDefault = { purchasedPlan: '', error: '' }
const getPlansDefault = { plans: [], error: '' }


export const AuthContext = createContext<ContextType>({
    userData: null,
    authModalActive: false,
    signUpActive: false,
    login: async () => '',
    googleLogin: async () => '',
    logout: () => undefined,
    register: async () => '',
    toggleAuthModal: () => undefined,
    toggleSignUp: () => undefined,
    writeUserData: async () => '',
    getUserSubscription: async () => getUserSubscriptionDefault,
    getPlans: async () => getPlansDefault,
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

    const writeUserData = async (purchasedPlanID: string) => {
        if(userData && userData.email) {
            const message: string = await FirebaseService.writeUserData(userData.uid, userData.email, purchasedPlanID)
            return message
        }
        toggleAuthModal(true)
        return 'Not logged in'
    }

    const getUserSubscription = async () => {
        if(userData) {
            const response = await FirebaseService.getUserSubscription(userData.uid)
            return response
        } 

        return {
            purchasedPlan: '',
            error: ''
        }
    }

    const getPlans = async () => {
        const response = await FirebaseService.getPlans()
        return response
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
            writeUserData,
            getUserSubscription,
            getPlans,
            ...props,
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

