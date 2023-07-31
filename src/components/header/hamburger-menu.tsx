import { useContext, useRef, useState } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'

import HamburgerMenuIcon from 'components/images/hamburguer-menu-icon'
import OutlinedCloseIcon from 'components/images/outlined-close-icon'
import ArrowIcon from 'components/images/arrow-icon'

import styles from './styles.module.css'
import useClickOutside from 'utils/hooks/useClickOutside'

const HamburgerMenu = () => {
    const { userData, logout, toggleAuthModal } = useContext(AuthContext)
    const modalRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = (value: boolean) => {
        setIsOpen(value)
    }

    useClickOutside(modalRef, toggleModal)

    return (
        <section className={styles.hamburgerMenuContainer}>
            <button onClick={() => toggleModal(!isOpen)}>
                {
                    isOpen ? <OutlinedCloseIcon className={styles.hamburgerMenuIcon} /> : <HamburgerMenuIcon className={styles.hamburgerMenuIcon} />
                }
            </button>
            {
                isOpen && <div className={styles.modal} />
            }
            <nav ref={modalRef} className={styles.hamburgerNav} style={{ left: isOpen ? '0' : '-100%'  }}>
                <ul className={styles.hamburgerLinks}>
                    <a href="https://www.valcann.com.br/valcann/carreiras" target="_blank" rel="noreferrer">
                        <li>
                            About
                            <ArrowIcon />
                        </li>
                    </a>
                    <a href="/plans">
                        <li>
                            Services
                            <ArrowIcon />
                        </li>
                    </a>
                    <a href="https://www.valcann.com.br/valcann/carreiras" target="_blank" rel="noreferrer">
                        <li>
                            Team
                            <ArrowIcon />
                        </li>
                    </a>
                    <a href="https://suporte.valcann.com.br/" target="_blank" rel="noreferrer">
                        <li>
                            Support
                            <ArrowIcon />
                        </li>
                    </a>
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