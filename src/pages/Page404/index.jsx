import styles from './Page404.module.css'

const Page404 = () => {
  return (
    <>
      <h2 className={styles.mensagem1}>Ops! Aconteceu algum ERROR</h2>
      <div className={styles.container_erro}>
          <span className={styles.numero_erro}>404</span> <br />
          <strong className={styles.mensagem2}>Página não Encontrada !!</strong>
      </div>
    </>
  )
}

export default Page404