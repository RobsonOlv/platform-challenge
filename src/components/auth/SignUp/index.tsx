import { useFormik } from 'formik'
import { useContext } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'
import { validate } from 'utils/functions'

import AvatarIcon from 'components/images/avatar-icon'
import LockIcon from 'components/images/lock-icon'
import CloseIcon from 'components/images/close-icon'
import ArrowBackIcon from 'components/images/arrow-back'

import styles from '../styles.module.css'

const SignUp = () => {
    const { signUpActive, toggleAuthModal, toggleSignUp } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            emailValidation: '',
            password: '',
            passwordValidation:  '',
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
            <h2>Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    <AvatarIcon />
                    <input 
                        autoComplete="one-time-code"
                        className={styles.input} 
                        name="email"
                        type="email"
                        placeholder="E-mail"
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
                        autoComplete="one-time-code"
                        className={styles.input}
                        name="password"
                        type="password"
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
                <label>
                    <LockIcon />
                    <input
                        autoComplete="one-time-code"
                        className={styles.input}
                        name="passwordValidation"
                        type="password"
                        placeholder="Repeat Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.passwordValidation || ''}
                    />
                </label>
                {
                    formik.touched.passwordValidation && formik.errors.passwordValidation
                        ? <span className={styles.errorMessage}>{formik.errors.passwordValidation}</span>
                        : null
                }
                <input className={styles.cardButton} disabled={!(formik.isValid && formik.dirty)} type="submit" value="Sign Up" />
            </form>
            <footer>
                <ArrowBackIcon className={styles.navigationButton} onClick={() => toggleSignUp(false)} />
            </footer>
        </article>
    )
}

export default SignUp