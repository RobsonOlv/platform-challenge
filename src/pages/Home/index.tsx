import CarouselSection from 'components/carousel-section'
import TrailsSection from 'components/trails-section'
import styles from './styles.module.css'

const HomePage = () => {
    return (
        <div>
            <section id="about" className={styles.aboutContainer}>
                <CarouselSection />
                <div className={styles.aboutDescriptionContainer}>
                    <h1 className={styles.aboutDescriptionTitle}>Tenha a melhor experiência do mercado com a excelência <span>BLABLA</span></h1>
                    <p>Lorem ipsum blablaLorem ipsum blablaLorem ipsum blabla</p>
                </div>
            </section>
            <TrailsSection />
            <section id="info" className={styles.infoContainer}>
                <h2>Impulsione seu modelo</h2>
                <text>Talvez uma trilha</text>
            </section>
        </div>
    )
}

export default HomePage