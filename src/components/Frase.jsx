import styles from './Frase.module.css'

function frase() {
    return (
    <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Este componente é uma frase</p>
    </div>
    )
}

export default frase;