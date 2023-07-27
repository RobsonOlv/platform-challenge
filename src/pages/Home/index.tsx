import styles from './styles.module.css'

interface ServiceCardProps {
    direction: 'rtl' | 'ltr'
}
const ServiceCard = ({ direction }: ServiceCardProps) => {
    return (
        <div className={styles.serviceCard} style={{ direction }}>
            <div style={{ width: 128, height: 128, borderRadius: 8, border: '1px solid white' }}></div>
            <p style={{ width: 200 }}>Texto sobre o cardTexto sobre o cardTexto sobre o cardTexto sobre o cardTexto sobre o card</p>
        </div>
    )
}

const HomePage = () => {
    return (
        <div>
            <section id="about" className={styles.aboutContainer}>
                <div>
                    <h2>alo</h2>
                </div>
                <div className={styles.aboutDescriptionContainer}>
                    <h1 className={styles.aboutDescriptionTitle}>Tenha a melhor experiência do mercado com a excelência <span>BLABLA</span></h1>
                    <p>Lorem ipsum blablaLorem ipsum blablaLorem ipsum blabla</p>
                </div>
            </section>
            <section id="services" className={styles.servicesContainer}>
                <div>
                    <ServiceCard direction='ltr' />
                    <ServiceCard direction='rtl'/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className={styles.serviceButton}>Conheça nossos planos</button>
                    </div>
                </div>
            </section>
            <section id="info" className={styles.infoContainer}>
                <h2>Impulsione seu modelo</h2>
                <text>Talvez uma trilha</text>
            </section>
        </div>
    )
}

export default HomePage