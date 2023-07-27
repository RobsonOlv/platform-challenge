import HamburgerMenuIcon from 'components/images/hamburguer-menu-icon'
import OutlinedCloseIcon from 'components/images/outlined-close-icon'
import ArrowIcon from 'components/images/arrow-icon'
import styles from './styles.module.css'
import { useState } from 'react'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

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
                        Quem somos?
                        <ArrowIcon />
                    </li>
                    <li>
                        Serviços
                        <ArrowIcon />
                    </li>
                    <li>
                        Time
                        <ArrowIcon />
                    </li>
                    <li style={{ border: 'none' }}>
                        Suporte
                        <ArrowIcon />
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default HamburgerMenu