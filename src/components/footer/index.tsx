import WhiteValcannLogo from 'components/images/Valcann-white.svg'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.footerLinks}>
                    <li>Terms of Service</li>
                    <div className={styles.separator}/>
                    <li>Contact</li>
                    <div className={styles.separator}/>
                    <li>Privacy policy</li>
                </ul>
            </nav>
            <div className={styles.rightsContainer}>
                <a target='_blank' rel="noopener noreferrer"  href="https://www.valcann.com.br/">
                    <img src={WhiteValcannLogo} alt="Logo branca da Valcann" />
                </a>
            </div>
        </footer>
    )
}

export default Footer