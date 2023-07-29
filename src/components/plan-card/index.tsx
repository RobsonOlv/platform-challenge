import { useContext } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'
import TriangleImage from 'components/images/triangle'
import ConfirmIcon from 'components/images/confirm-icon'
import FilledCloseIcon from 'components/images/filled-close-icon'

import styles from './styles.module.css'

export interface PlanCardProps {
    title: string,
    price: number,
    color: string,
    includes: {
        name: string,
        check: boolean
    }[],
    url?: string,
}

const PlanCard = ({ title, price, color, includes, url }: PlanCardProps) => {
    const { userData, toggleAuthModal } = useContext(AuthContext)
    const [int, decim] = String(price).split('.')

    const purchase = () => {
        if(!userData) {
            toggleAuthModal(true)
        } else {
            console.log('implementar a compra')
        }
    }

    return (
        <article className={styles.planCard}>
            <header className={styles.planCardName} style={{ backgroundColor: color }}>
                <p>{title}</p>
                <TriangleImage fill={color} className={styles.planCardTriangle} />
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
                                includes.map((include, index) => (
                                    <li key={`card-include-${title}-${include.name}`}>
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