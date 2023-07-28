import { Link } from 'react-router-dom'
import styles from './styles.module.css'

interface ServiceCardProps {
    direction: 'row' | 'row-reverse'
    image: string,
    title: string,
    description: string
}
const ServiceCard = ({ direction, image, title, description }: ServiceCardProps) => {
    return (
        <div className={styles.serviceCard} style={{ flexDirection: direction }}>
            <img src={image} alt="Exemplo de serviço" />
            <div className={styles.serviceCardDescription}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

const HomePage = () => {
    const services = [
        {
            image: "./EmbeddedImage.png",
            title: "Valcann Cloud Business Applications",
            description: "Com o Valcann Cloud Applications, entregamos aplicações de negócios na nuvem de ponta a ponta. Realizamos a migração e administração de todo o stack de infraestrutura da aplicação, garantindo segurança, alta disponibilidade e monitoramento.",
        },
        {
            image: "https://www.postdicom.com/images/cloud-pacs.svg",
            title: "Valcann cloud storage for PACS",
            description: "Sistemas PACS possibilitam a integração com plataformas de telemedicina. Exames armazenados no sistema podem ser facilmente compartilhados com empresas que prestam serviços de laudo à distância. Com sistemas PACS, o problema de perda do laudo deixa de existir.",
        },
        {
            image: "https://cdni.iconscout.com/illustration/premium/thumb/software-as-a-service-7948574-6318377.png?f=webp",
            title: "Valcann SAAS Factory",
            description: "A implementação de SaaS (software como serviço) refere-se às tarefas que devem ser desenvolvidas para habilitar com sucesso uma oferta SaaS em um ambiente de Computação em Nuvem.",
        },
    ]
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
                    {
                        services.map((service, index) => (
                            <ServiceCard key={`service-card-${service.title}`} image={service.image} title={service.title} description={service.description} direction={index%2 === 0 ? 'row' : 'row-reverse'} />
                        ))
                    }
                    <div className={styles.serviceButtonContainer}>
                        <Link to='/plans' style={{ textDecoration: 'none' }}>
                            <button className={styles.serviceButton}>Conheça nossos planos</button>
                        </Link>
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