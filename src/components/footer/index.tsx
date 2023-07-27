import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
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
                    <div style={{ width: 32, height: 32, background: 'red' }}></div>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer