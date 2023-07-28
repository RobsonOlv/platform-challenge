import HamburgerMenu from './hamburger-menu'
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <a target='_blank' rel="noopener noreferrer" href='https://www.valcann.com.br/'>
                <img className={styles.logo} src="https://cdn-images-1.medium.com/v2/resize:fit:724/1*mRme0B25xZ00nxR8W8_ECg@2x.png"  alt="Logo colorido da Valcann" />
            </a>
            <nav className={styles.rightLinksContainer}>
                <ul className={styles.rightLinks}>
                    <li>Quem somos?</li>
                    <li>Serviços</li>
                    <li>Time</li>
                    <li>Suporte</li>
                </ul>
            </nav>
            <HamburgerMenu/>
        </header>
    )
}

export default Header