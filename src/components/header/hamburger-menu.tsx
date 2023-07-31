import { useContext, useState } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'

import HamburgerMenuIcon from 'components/images/hamburguer-menu-icon'
import OutlinedCloseIcon from 'components/images/outlined-close-icon'
import ArrowIcon from 'components/images/arrow-icon'

import styles from './styles.module.css'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { userData, logout, toggleAuthModal } = useContext(AuthContext)

    return (
        <section className={styles.hamburgerMenuContainer}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <OutlinedCloseIcon className={styles.hamburgerMenuIcon} /> : <HamburgerMenuIcon className={styles.hamburgerMenuIcon} />
                }
            </button>
            {
                isOpen && <div className={styles.modal} />
            }
            <nav className={styles.hamburgerNav} style={{ left: isOpen ? '0' : '-100%'  }}>
                <ul className={styles.hamburgerLinks}>
                    <li>
                        <a href="https://www.valcann.com.br/valcann/carreiras" target="_blank" rel="noreferrer">About</a>
                        <ArrowIcon />
                    </li>
                    <li>
                        <a href="/plans">Services</a>
                        <ArrowIcon />
                    </li>
                    <li>
                        <a href="https://www.valcann.com.br/valcann/carreiras" target="_blank" rel="noreferrer">Team</a>
                        <ArrowIcon />
                    </li>
                    <li>
                        Support
                        <ArrowIcon />
                    </li>
                    <li  onClick={() => userData === null ? toggleAuthModal(true) : logout()} style={{ color: userData === null ? 'var(--blue)' : 'var(--danger)', border: 'none' }}>
                        {userData === null ? 'Sign In': 'Sign Out'}
                        <ArrowIcon />
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default HamburgerMenu