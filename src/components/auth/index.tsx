import { useContext, useEffect, useRef } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'
import SignUp from './SignUp'
import SignIn from './SignIn'
import styles from './styles.module.css'
import useClickOutside from 'utils/hooks/useClickOutside'

const Auth = () => {
    const { authModalActive, signUpActive, toggleAuthModal } = useContext(AuthContext)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (document) {
            document.body.style.overflow = authModalActive ? 'hidden' : 'unset'
        }
    }, [authModalActive])

    useClickOutside(modalRef, toggleAuthModal)

    return authModalActive ? (
        <div className={styles.container}>
            {
                signUpActive ? <SignUp ref={modalRef} /> : <SignIn ref={modalRef} />
            }
        </div>
    ) : null
}

export default Auth