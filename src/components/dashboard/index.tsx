import { useContext } from 'react'
import { AuthContext } from 'utils/contexts/AuthContext'
import { Plan } from 'utils/typings/interfaces'

import styles from './styles.module.css'

interface DashboardProps {
    purchasedPlan: Plan,
    updatePurchasedPlan: (value: string) => void
    togglePlanChange: () => void
}

const Dashboard = ({ purchasedPlan, updatePurchasedPlan, togglePlanChange }: DashboardProps) => {
    const { writeUserData } = useContext(AuthContext)

    const cancelSubscription = async () => {
        await writeUserData('').then((error) => {
            if (!error) {
                updatePurchasedPlan('')
            }
        })
    }

    return (
        <section className={styles.container}>
            <header>
                <div className={styles.planDescription}>
                    <h2>Dashboard</h2>
                    <p>Hello, your current plan is "<span style={{ color: purchasedPlan.color, fontWeight: 500 }}>{purchasedPlan.title}</span>"</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={togglePlanChange}>Change Plan</button>
                    <button onClick={cancelSubscription}>Cancel Plan</button>
                </div>
            </header>
            <div className={styles.customersContainer}>
                <img src="mocks/customers.png" alt="imagem representativa de grafico" />
                <img src="mocks/revenue.png" alt="imagem representativa de grafico" />
            </div>
            <img src="mocks/storage-growth.png" alt="imagem representativa de grafico" />
        </section>
    )
}

export default Dashboard