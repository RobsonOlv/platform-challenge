import WhiteValcannLogo from 'components/images/Valcann-white.svg'
import { InstagramIcon, TwitterIcon, LinkedinIcon } from 'components/images/social-icons'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.rightsContainer}>
                <a target='_blank' rel="noopener noreferrer"  href="https://www.valcann.com.br/">
                    <img src={WhiteValcannLogo} alt="Logo branca da Valcann" />
                </a>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/valcanncloud/" target='_blank' rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://twitter.com/valcann" target='_blank' rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="https://www.linkedin.com/company/valcann/" target='_blank' rel="noopener noreferrer">
                    <LinkedinIcon />
                </a>
            </div>
            <nav>
                <ul className={styles.footerLinks}>
                    <li style={{ cursor: 'no-drop' }}>Terms of Service</li>
                    <div className={styles.separator}/>
                    <li><a rel="noreferrer" target="_blank" href="https://materiais.valcann.com.br/contato">Contact</a></li>
                    <div className={styles.separator}/>
                    <li><a rel="noreferrer" target="_blank" href="https://www.valcann.com.br/valcann/politica-de-privacidade">Privacy policy</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer