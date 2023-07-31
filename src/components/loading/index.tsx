import { HTMLProps } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import styles from './styles.module.css'

const LoadingComponent = (props: HTMLProps<HTMLElement>) => {
    return (
        <div className={styles.container}>
            <MutatingDots
                {...props}
                height="100"
                width="100"
                color="#482C86"
                secondaryColor= '#05BDDB'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <p>
                Loading...
            </p>
        </div>
    )
}

export default LoadingComponent