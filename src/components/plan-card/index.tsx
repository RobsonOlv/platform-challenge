import { useContext } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'
import { Plan } from 'utils/typings/interfaces'
import TriangleImage from 'components/images/triangle'
import ConfirmIcon from 'components/images/confirm-icon'
import FilledCloseIcon from 'components/images/filled-close-icon'

import styles from './styles.module.css'

interface PlanCardProps {
    plan: Plan,
    togglePurchaseModal: (plan: Plan) => void
}

const PlanCard = ({ plan, togglePurchaseModal }: PlanCardProps) => {
    const { userData, toggleAuthModal } = useContext(AuthContext)
    const [int, decim] = String(plan.price).split('.')

    const purchase = () => {
        if(!userData) {
            toggleAuthModal(true)
        } else {
            togglePurchaseModal(plan)
        }
    }

    return (
        <article className={styles.planCard}>
            <header className={styles.planCardName} style={{ backgroundColor: plan.color }}>
                <p>{plan.title}</p>
                <TriangleImage fill={plan.color} className={styles.planCardTriangle} />
            </header>
            <div className={styles.planCardBody}>
                <div>
                    <div className={styles.priceContainer}>
                        R$
                        <p className={styles.priceInt}>{int}</p>
                        <p className={styles.priceDec}>,{decim}</p>
                    </div>
                    <p className={styles.priceTime}>mensal</p>
                    <hr />
                    <div className={styles.includesContainer}>
                        <p>
                            inclui: 
                        </p>
                        <ul>
                            {
                                plan.includes.map((include, index) => (
                                    <li key={`card-include-${plan.title}-${include.name}`}>
                                        {
                                            include.check ? <ConfirmIcon className={styles.includesContainerIcon} /> : <FilledCloseIcon className={styles.includesContainerIcon} />
                                        }
                                        <p>
                                            {include.name}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <button onClick={purchase}>
                    Aproveitar oferta
                </button>
            </div>
            <footer>
                Cancele a qualquer momento.
            </footer>
        </article>
    )
}

export default PlanCard