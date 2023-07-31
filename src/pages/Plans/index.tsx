import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "utils/contexts/AuthContext";
import useClickOutside from "utils/hooks/useClickOutside";
import { Plan } from "utils/typings/interfaces";
import PlanCard from "components/plan-card";
import GraphImage from "components/images/graph";
import PurchaseModal from "components/purchase-card";
import LoadingComponent from "components/loading";
import Dashboard from "components/dashboard";

import styles from "./styles.module.css";

const PlansPage = () => {
  const { userData, getPlans, getUserSubscription } = useContext(AuthContext)
  const [plansData, setPlansData] = useState<Plan[]>([]);
  const [chosenPlan, setChosenPlan] = useState<Plan | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [purchasedPlan, setPurchasedPlan ] = useState('')
  const [dashboardActive, setDashboardActive] = useState(true)
  const modalRef = useRef(null)

  const purchasedPlanData = plansData.find((plan) => plan.id === purchasedPlan)!

  const toggleModal = (plan: Plan | null) => {
    setChosenPlan(plan)
  }

  const togglePlanChange = () => {
    setDashboardActive(!dashboardActive)
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getPlans().then((result) => {
        setIsLoading(false)
        return result
      });

      if (data.error) {
        setErrorMessage(data.error);
      } else {
        setPlansData(data.plans);
      }
    }
    fetchData();
  }, [getPlans]);

  useEffect(() => {
    if(!userData) return
    async function fetchPurchasedPlan() {
      const data = await getUserSubscription().then((result) => {
        return result
      });

      if (!data.error) {
        setPurchasedPlan(data.purchasedPlan);
      } 
    }
    fetchPurchasedPlan();
  }, [getUserSubscription, userData, chosenPlan]);

  useEffect(() => {
    if (document) {
        document.body.style.overflow = chosenPlan ? 'hidden' : 'unset'
      }
  }, [chosenPlan])

  useClickOutside(modalRef, () => setChosenPlan(null))

  return (
    <div className={styles.container}>
      <section className={styles.infoContainer}>
        <GraphImage className={styles.infoBackground} />
        <article>
          <h1 className={styles.infoContainerTitle}>
            Choose the right plan for you
          </h1>
          <h4 className={styles.infoContainerSubtitle}>
            We have plans with different levels to fit your use case.
          </h4>
          <footer>
            by subscribing to a plan, you agree to the terms of service.
          </footer>
        </article>
      </section>
      <div className={styles.subcontainer}>
        {
          dashboardActive && userData && purchasedPlan && plansData.length > 0 && (
            <Dashboard purchasedPlan={purchasedPlanData} togglePlanChange={togglePlanChange} />
          )
        }
        {
          ( !purchasedPlan || !dashboardActive) && (
            <section className={styles.plansBox}>
              {
                userData && purchasedPlan && (
                  <div className={styles.changePlanHeader}>
                    <h2>Change your plan</h2>
                    <span onClick={togglePlanChange}>back to Dashboard</span>
                  </div>
                )
              }
              {
                isLoading ? (
                  <LoadingComponent />
                ) : (
                  <div className={styles.plansContainer}>
                    {plansData.map((plan) => (
                      <PlanCard
                        key={`plan-card-${plan.id}`}
                        plan={plan}
                        purchasedPlan={userData ? purchasedPlan : ''}
                        togglePurchaseModal={toggleModal}
                      />
                    ))}
                  </div>
                )
              }
              {errorMessage && (
                <span
                  className={styles.errorMessage}
                >{`Failed =/ : ${errorMessage}`}</span>
              )}
            </section>
          )
        }
        <section className={styles.questionsContainer}>
          <div className={styles.questionsDescription}>
            <h2>Questions?</h2>
            <p>
              Talk to a product specialist about features, sizing, support
              plans, and consulting.
            </p>
          </div>
          <Link to={"https://materiais.valcann.com.br/contato"} target="_blank">
            <button>Support</button>
          </Link>
        </section>
      </div>
      {
        chosenPlan && (
          <div ref={modalRef} className={styles.purchaseModal}>
            <PurchaseModal chosenPlan={chosenPlan} togglePurchaseModal={toggleModal} />
          </div>
        )
      }
    </div>
  );
};

export default PlansPage;
