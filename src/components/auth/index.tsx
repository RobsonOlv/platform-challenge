import { useContext } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import styles from './styles.module.css'
import { AuthContext } from 'utils/contexts/AuthContext'

const Auth = () => {
    const { signUpActive } = useContext(AuthContext)

    return (
        <div className={styles.container}>
            {
                signUpActive ? <SignUp /> : <SignIn />
            }
        </div>
    )
}

export default Auth