import CarouselSection from 'components/carousel-section'
import TrailsSection from 'components/trails-section'
import styles from './styles.module.css'

const HomePage = () => {
    return (
        <div>
            <section id="about" className={styles.aboutContainer}>
                <CarouselSection />
                <div className={styles.aboutDescriptionContainer}>
                    <h1 className={styles.aboutDescriptionTitle}>Tenha a melhor experiência do mercado com a excelência <span>Valcann</span></h1>
                    <p>A Valcann é especialista em Computação em Nuvem. Nossa prática é baseada no amplo conhecimento da nossa equipe, a qual além de larga experiência profissional e técnica, é fortemente envolvida com a academia.</p>
                </div>
            </section>
            <TrailsSection />
            <section id="info" className={styles.infoContainer}>
                <div className={styles.infoBox}>
                    <div className={styles.infoDescriptionContainer}>
                        <h2>Impulsione sua empresa</h2>
                        <p>
                            Planejamento, execução e otimização de estratégias de migração para a Nuvem, com construção de jornada de adoção de Nuvem, plano de execução e migração.
                        </p>
                    </div>
                    <img src="https://lh3.googleusercontent.com/U8XJwjwCg1w6awmeS7USpkosIwSuQnAbYx61dGJ4f7UKcZvWKJpoMYsbOuxO4jc-B9F2TjoApGVpDcROA5Dg3n2vEeYJAF9RJ_xr8pnVMlu0fa-v-wLb4Ooq4k7rbIuOKg=w1280" alt="Imagem de trilha de migração" />
                </div>
            </section>
        </div>
    )
}

export default HomePage