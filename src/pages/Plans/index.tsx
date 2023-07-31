import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FirebaseService from "utils/services/firebase.service";
import useClickOutside from "utils/hooks/useClickOutside";
import { Plan } from "utils/typings/interfaces";
import PlanCard from "components/plan-card";
import GraphImage from "components/images/graph";
import PurchaseModal from "components/purchase-card";

import styles from "./styles.module.css";
import LoadingComponent from "components/loading";

const PlansPage = () => {
  const [plansData, setPlansData] = useState<Plan[]>([]);
  const [chosenPlan, setChosenPlan] = useState<Plan | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef(null)

  const toggleModal = (plan: Plan | null) => {
    setChosenPlan(plan)
  }

  useEffect(() => {
    async function fetchData() {
      const data = await FirebaseService.getPlans().then((result) => {
        setIsLoading(false)
        return result
      });

      if (data.error) {
        setErrorMessage(data.error);
      } else {
        setPlansData(data.success || []);
      }
    }
    fetchData();
  }, []);

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
            Escolha o plano IDEAL para você
          </h1>
          <h4 className={styles.infoContainerSubtitle}>
            Temos opções que vão desde...
          </h4>
          <footer>
            ao assinar um plano, você concorda com os termos de serviço...
          </footer>
        </article>
      </section>
      <div className={styles.subcontainer}>
        <section className={styles.plansBox}>
          {
            isLoading ? (
              <LoadingComponent />
            ) : (
              <div className={styles.plansContainer}>
                {plansData.map((plan) => (
                  <PlanCard
                    key={`plan-card-${plan.title}`}
                    plan={plan}
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
