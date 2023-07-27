import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div style={{ width: 32, height: 32, background: 'red' }}></div>
            <nav className={styles.rightLinksContainer}>
                <ul className={styles.rightLinks}>
                    <li>Quem somos?</li>
                    <li>Serviços</li>
                    <li>Time</li>
                    <li>Suporte</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header