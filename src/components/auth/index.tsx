import { useContext } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import styles from './styles.module.css'
import { AuthContext } from 'utils/contexts/AuthContext'

const Auth = () => {
    const { authModalActive, signUpActive } = useContext(AuthContext)

    return authModalActive ? (
        <div className={styles.container}>
            {
                signUpActive ? <SignUp /> : <SignIn />
            }
        </div>
    ) : null
}

export default Auth