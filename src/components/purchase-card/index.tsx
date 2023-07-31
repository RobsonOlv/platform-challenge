import CloseIcon from 'components/images/close-icon'
import { Plan } from 'utils/typings/interfaces'
import ConfirmIcon from 'components/images/confirm-icon'
import FilledCloseIcon from 'components/images/filled-close-icon'

import styles from './styles.module.css'
import LoadingComponent from 'components/loading'
import { useEffect, useState } from 'react'
import SatisfiedIcon from 'components/images/satisfied-icon'

interface PurchaseModalProps {
    chosenPlan: Plan
    togglePurchaseModal: (value: Plan | null) => void
}

const PurchaseModal = ({ chosenPlan, togglePurchaseModal }: PurchaseModalProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isFinished, setIsFinished] = useState(false)

    const purchase = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsFinished(true)
        }, 2000)

    }

    useEffect(() => {
        if(!isFinished) return
        setTimeout(() => {
            setIsFinished(false)
            togglePurchaseModal(null)
        }, 2000)
    }, [isFinished, togglePurchaseModal])

    return isLoading ? (
        <article className={styles.container}>
            <LoadingComponent />
        </article>
    ) :  isFinished ? (
        <article className={styles.container}>
            <header>
                <CloseIcon className={styles.navigationButton} onClick={() => togglePurchaseModal(null)} />
            </header>
            <div className={styles.purchaseText}>
                <h2 className={styles.purchaseComplete}>Purchase Complete!</h2>
                <p>Enjoy your benefits!</p>
                <SatisfiedIcon className={styles.purchaseImage} />
            </div>
        </article>
    ) : (
        <article className={styles.container}>
            <header>
                <CloseIcon className={styles.navigationButton} onClick={() => togglePurchaseModal(null)} />
            </header>
            <h2>Enjoy the promotion of your chosen plan!</h2>
            <p>Check out the benefits included below. If you have any questions, please contact us.</p>
            <section className={styles.chosenPlan}>
                <header style={{ backgroundColor: `${chosenPlan.color}` }}>
                    Selected Plan
                </header>   
                <div>
                    <div className={styles.includesContainer}>
                        <p>{chosenPlan.title}</p>
                        <ul>
                            {
                                chosenPlan.includes.map((include) => (
                                    <li key={`purchase-card-include-${chosenPlan.title}-${include.name}`}>
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
                    <div className={styles.priceContainer}>
                        <p style={{ textDecoration: chosenPlan.promotion?.isValid ? 'line-through' : 'none'}}>R${String(chosenPlan.price).replace('.', ',')}</p>
                        {
                            chosenPlan.promotion?.isValid && (
                                <div className={styles.pricePromotion}>
                                    R${String(chosenPlan.promotion?.value.toFixed(2)).replace('.', ',')}
                                    <span>/m</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
            <span>This promotion is valid until the release of the production version :)</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.cancelButton} onClick={() => togglePurchaseModal(null)}>Cancel</button>
                <button className={styles.purchaseButton} onClick={purchase}>Purchase</button>
            </div>
        </article>
    )
}

export default PurchaseModal