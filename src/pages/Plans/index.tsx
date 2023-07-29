import PlanCard, { PlanCardProps } from 'components/plan-card'
import FirebaseService from 'utils/services/firebase.service'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'


const PlansPage = () => {
    const [plansData, setPlansData] = useState<PlanCardProps[]>([])
    const [errorMessage, setErrorMessage] = useState('')
    
    useEffect(() => {
        async function fetchData() {
            const data = await FirebaseService.getPlans()

            if (data.error) {
                setErrorMessage(data.error)
            } else {
                setPlansData(data.success || [])
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <section className={styles.infoContainer}>
                <article>
                    <h1 className={styles.infoContainerTitle}>Escolha o plano IDEAL para você</h1>
                    <h4 className={styles.infoContainerSubtitle}>Temos opções que vão desde...</h4>
                    <footer>
                        ao assinar um plano, você concorda com os termos de serviço...
                    </footer>
                </article>
                <div style={{ width: 250, height: 140, background: 'brown' }}></div>
            </section>
            <section className={styles.plansBox}>
                <div className={styles.plansContainer}>
                    {
                        plansData.map((plan) => (
                            <PlanCard key={`plan-card-${plan.title}`} title={plan.title} color={plan.color} price={plan.price} includes={plan.includes} />
                        ))
                    }
                </div>
                {
                    errorMessage && <span className={styles.errorMessage}>{`Failed =/ : ${errorMessage}`}</span>
                }
            </section>
        </div>
    )
}

export default PlansPage