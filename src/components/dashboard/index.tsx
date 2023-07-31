import { Plan } from 'utils/typings/interfaces'
import styles from './styles.module.css'

const Dashboard = ({ purchasedPlan, togglePlanChange }: { purchasedPlan: Plan, togglePlanChange: () => void }) => {
    return (
        <section className={styles.container}>
            <header>
                <div className={styles.planDescription}>
                    <h2>Dashboard</h2>
                    <p>Hello, your current plan is "<span style={{ color: purchasedPlan.color, fontWeight: 500 }}>{purchasedPlan.title}</span>"</p>
                </div>
                <button onClick={togglePlanChange}>Change Plan</button>
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