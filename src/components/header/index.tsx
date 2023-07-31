import { useContext } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'
import HamburgerMenu from './hamburger-menu'
import styles from './styles.module.css'

const Header = () => {
    const { userData, logout, toggleAuthModal } = useContext(AuthContext)
    return (
        <header className={styles.header}>
            <a href='/'>
                <img className={styles.logo} src="https://cdn-images-1.medium.com/v2/resize:fit:724/1*mRme0B25xZ00nxR8W8_ECg@2x.png"  alt="Logo colorido da Valcann" />
            </a>
            <nav className={styles.rightLinksContainer}>
                <ul className={styles.rightLinks}>
                    <li><a href="https://www.valcann.com.br/valcann/quem-somos" target="_blank" rel="noreferrer">About</a></li>
                    <li><a href="/plans">Services</a></li>
                    <li><a href="https://www.valcann.com.br/valcann/carreiras" target="_blank" rel="noreferrer">Team</a></li>
                    <li><a href="https://suporte.valcann.com.br/" target="_blank" rel="noreferrer">Support</a></li>
                    <li onClick={() => userData === null ? toggleAuthModal(true) : logout()} style={{ color: userData === null ? 'var(--blue)' : 'var(--danger)' }}>
                        {userData === null ? 'Sign In': 'Sign Out'}
                    </li>
                </ul>
            </nav>
            <HamburgerMenu/>
        </header>
    )
}

export default Header