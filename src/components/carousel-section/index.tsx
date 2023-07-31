import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import FirebaseService from 'utils/services/firebase.service'
import LoadingComponent from 'components/loading'

export interface PostProps {
    title: string,
    description: string,
    image: string,
    link: string,
    index?: number
}

const CarouselSection = () => {
    const [userSelect, setUserSelect] = useState(false)
    const [cardIndex, setCardIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const [postData, setPostData] = useState<PostProps[]>([])
    
    useEffect(() => {
        async function fetchData() {
            const data = await FirebaseService.getPosts().then((result) => {
                setIsLoading(false)
                return result
            })
            if (data.error) {
                setErrorMessage(data.error)
            } else {
                setPostData(data.success || [])
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (userSelect) return
        const cardSlide = setInterval(() => {
            const nextCard = cardIndex === postData.length - 1 ? 0 : cardIndex + 1
            setCardIndex(nextCard)
        }, 3000)

        return () => clearInterval(cardSlide)
    }, [cardIndex, userSelect, postData])

    const CarouselCard = ({title, description, image, link, index}: PostProps) => {
        return (
                <section className={`${styles.cardContainer} ${styles.flex} ${cardIndex === index && !userSelect ? styles.cardContainerSelected : ''}`} onMouseOver={() => setUserSelect(true)}>
                    <Link to={link} target="_blank">
                        <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
                    </Link>
                    <div className={styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.cardDescription}>
                        <p>{description}</p>
                    </div>
                </section>
        )
    }

    return (
        <section className={styles.container}>
            {
                isLoading ? (
                    <LoadingComponent />
                ) : (
                    <div className={styles.subcontainer}>
                        {
                            postData.map((post, index) => 
                            (
                                <CarouselCard key={`blog-post-${post.title}`} {...post} index={index} />
                            ))
                        }
                    </div>
                )
            }
            {
                errorMessage && <span className={styles.errorMessage}>{`Failed =/ : ${errorMessage}`}</span>
            }
        </section>
    )
}

export default CarouselSection