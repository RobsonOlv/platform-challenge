import { useContext } from 'react'
import { useFormik } from 'formik'
import { AuthContext } from 'utils/contexts/AuthContext'
import { validate } from 'utils/functions'

import AvatarIcon from 'components/images/avatar-icon'
import LockIcon from 'components/images/lock-icon'
import CloseIcon from 'components/images/close-icon'

import styles from '../styles.module.css'

const SignIn = () => {
    const { signUpActive, toggleAuthModal, toggleSignUp } = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            signUpActive
        },
        validate,
        onSubmit: (values) => {
            console.log('submit')
        },
    });

    return (
        <article className={styles.article}>
            <header>
                <CloseIcon className={styles.navigationButton} onClick={() => toggleAuthModal(false)} />
            </header>
            <h2>Sign In</h2>
            <form onSubmit={formik.handleSubmit} autoComplete="new-password">
                <input name="f_email" style={{ display: 'none' }} type="text" />
                <input name="f_password" style={{ display: 'none' }} type="password" />
                <label>
                    <AvatarIcon />
                    <input
                        className={styles.input}
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        autoComplete="off"
                        defaultValue={'dwadawda'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                </label>
                {
                    formik.touched.email && formik.errors.email
                        ? <span className={styles.errorMessage}>{formik.errors.email}</span>
                        : null
                }
                <label>
                    <LockIcon />
                    <input
                        className={styles.input}
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                </label>
                {
                    formik.touched.password && formik.errors.password
                        ? <span className={styles.errorMessage}>{formik.errors.password}</span>
                        : null
                }
                <input className={styles.cardButton} disabled={!(formik.isValid && formik.dirty)} type="submit" value="Sign In" />
                <p className={styles.cardButtonSeparator}>or</p>
                <button className={styles.googleButton}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Logo da Google" />
                    Continue with Google
                </button>
            </form>
            <footer>
                <p>Don’t you have an account? <span onClick={() => toggleSignUp(true)}>Create one</span></p>
            </footer>
        </article>
    )
}

export default SignIn